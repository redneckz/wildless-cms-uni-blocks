import { JSX, PropsWithChildren } from '@redneckz/uni-jsx';
import type { BlockContent } from './BlockContent';
import { LikeControl } from './LikeControl';
import { Placeholder } from './Placeholder';
import type { BlockDef, ContentPageDef, UniBlockProps } from './types';

interface BlockDecoratorProps<VNode> {
  blockClassName: string;
  block: BlockDef;
  render: (props: { blockClassName: string; block: BlockDef }) => VNode;
}

export type BlockDecorator<VNode = any> = (
  props: BlockDecoratorProps<VNode>,
  index?: number | string,
) => any;

export interface ContentPageProps extends UniBlockProps {
  blocksRegistry: Record<
    string,
    (props: PropsWithChildren<UniBlockProps & BlockContent, any>, context?: any) => any
  >;
  data: ContentPageDef;
  blockDecorator?: BlockDecorator;
}

const defaultBlockDecorator: BlockDecorator = ({ blockClassName, block, render }) =>
  render({ blockClassName, block });

export const ContentPage = JSX<ContentPageProps>(
  ({
    className,
    context,
    blocksRegistry,
    data: { style: pageStyle, blocks, slots = {}, likeControl, colorPalette = 'pc' },
    blockDecorator = defaultBlockDecorator,
  }) => {
    const { header, body } = slots;

    return (
      <section
        className={`relative ${style2className(pageStyle)} ${className || ''}`}
        data-theme={colorPalette}
      >
        {header?.blocks?.length ? (
          <div className={`grid grid-cols-12 gap-1 ${style2className(header?.style)}`}>
            {header.blocks.map(renderBlock)}
          </div>
        ) : null}

        {body?.blocks?.length ? (
          <div
            className={`container items-center grid grid-cols-12 gap-1 ${style2className(
              body?.style,
            )}`}
          >
            {body.blocks.map(renderBlock)}
          </div>
        ) : null}

        {blocks?.length ? blocks.map(renderBlock) : null}

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
      if (!(type in blocksRegistry)) {
        console.warn(`No block with "${type}" is registered`);
      }

      const BlockComponent = blocksRegistry[type] || Placeholder;
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
