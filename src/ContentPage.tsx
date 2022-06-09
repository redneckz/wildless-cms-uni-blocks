import { JSX } from '@redneckz/uni-jsx';
import { Blocks } from './Blocks';
import { LikeControl } from './LikeControl';
import type { BlockDef, ContentPageDef, UniBlocksComponentProps } from './types';

interface BlockDecoratorProps<VNode> {
  blockClassName: string;
  block: BlockDef;
  render: (props: { blockClassName: string; block: BlockDef }) => VNode;
}

export type BlockDecorator<VNode = any> = (
  props: BlockDecoratorProps<VNode>,
  index?: number | string,
) => any;

export interface ContentPageProps extends UniBlocksComponentProps {
  data: ContentPageDef;
  blockDecorator?: BlockDecorator;
}

const defaultBlockDecorator: BlockDecorator = ({ blockClassName, block, render }) =>
  render({ blockClassName, block });

export const ContentPage = JSX<ContentPageProps>(
  ({
    className,
    data: { style: pageStyle, blocks, likeControl, colorPalette = 'pc' },
    context,
    blockDecorator = defaultBlockDecorator,
  }) => {
    return (
      <section className="relative" data-theme={colorPalette}>
        <div className={`grid grid-cols-12 ${style2className(pageStyle)} ${className}`}>
          {blocks?.length ? blocks.map(renderBlock) : null}
        </div>
        {likeControl && (
          <div className="flex items-end absolute bottom-0 right-0 h-full pointer-events-none">
            <LikeControl
              className="rounded-tl-lg sticky bottom-0 pointer-events-auto"
              context={context}
            />
          </div>
        )}
      </section>
    );

    function renderBlock(block: BlockDef, i: number) {
      const { type } = block;
      if (!(type in Blocks)) {
        console.warn(`No block with "${type}" is registered`);
        return null;
      }

      const BlockComponent = Blocks[type as keyof typeof Blocks];
      return blockDecorator(
        {
          blockClassName: style2className(block.style),
          block,
          render: (props) => {
            const { version, content, blocks } = props.block;
            return (
              <BlockComponent
                key={`${type}-${i}`}
                className={props.blockClassName}
                version={version}
                context={context}
                {...content}
              >
                {blocks?.length ? blocks.map(renderBlock) : null}
              </BlockComponent>
            );
          },
        },
        `block-${i}`,
      );
    }
  },
);

function style2className(style: string[] | undefined | null): string {
  return style ? style.join(' ') : '';
}
