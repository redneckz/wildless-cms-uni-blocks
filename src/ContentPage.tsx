import { JSX } from '@redneckz/uni-jsx';
import { Blocks } from './Blocks';
import { LikeControl } from './ui-kit/LikeControl';
import type { ContentPageContext } from './ContentPageContext';
import type { BlockDef, ContentPageDef } from './types';

interface BlockDecoratorProps<VNode> {
  blockClassName: string;
  block: BlockDef;
  render: (props: { blockClassName: string; block: BlockDef }) => VNode;
}

export type BlockDecorator<VNode = any> = (props: BlockDecoratorProps<VNode>) => any;

export interface ContentPageProps {
  className?: string;
  data: ContentPageDef;
  context: ContentPageContext;
  blockDecorator?: BlockDecorator;
}

const defaultBlockDecorator: BlockDecorator = ({ blockClassName, block, render }) =>
  render({ blockClassName, block });

export const ContentPage = JSX<ContentPageProps>(
  ({
    className,
    data: { style: pageStyle, blocks, likeControl },
    context,
    blockDecorator = defaultBlockDecorator,
  }) => {
    return (
      <section className={`grid grid-cols-12 ${style2className(pageStyle)} ${className}`}>
        {blocks && blocks.map(renderBlock)}
        {likeControl && <LikeControl context={context} />}
      </section>
    );

    function renderBlock(block: BlockDef, i: number) {
      const { type } = block;
      if (!(type in Blocks)) {
        console.warn(`No block with "${type}" is registered`);
        return null;
      }

      const BlockComponent = Blocks[type as keyof typeof Blocks];
      return blockDecorator({
        blockClassName: style2className(block.style),
        block,
        render: (props) => {
          const { content, blocks } = props.block;
          return (
            <BlockComponent
              key={`${type}-${i}`}
              className={props.blockClassName}
              context={context}
              {...content}
            >
              {blocks && blocks.map(renderBlock)}
            </BlockComponent>
          );
        },
      });
    }
  },
);

function style2className(style: string[] | undefined | null): string {
  return style ? style.join(' ') : '';
}
