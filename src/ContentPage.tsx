import { JSX } from '@redneckz/uni-jsx';
import { Blocks } from './Blocks';
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
  blockDecorator?: BlockDecorator;
}

const defaultBlockDecorator: BlockDecorator = ({ blockClassName, block, render }) =>
  render({ blockClassName, block });

export const ContentPage = JSX<ContentPageProps>(
  ({ className, data: { style: pageStyle, blocks }, blockDecorator = defaultBlockDecorator }) => {
    return (
      <section className={`grid grid-cols-12 ${style2className(pageStyle)} ${className}`}>
        {blocks && blocks.map(renderBlock)}
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
            <BlockComponent key={`${type}-${i}`} className={props.blockClassName} {...content}>
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
