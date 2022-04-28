import { JSX } from '@redneckz/uni-jsx';
import { Blocks } from './Blocks';
import type { BlockDef, ContentPageDef } from './types';

export type BlockDecorator<VNode = any> = ({ block: BlockDef, children: VNode }) => any;
export interface ContentPageProps {
  data: ContentPageDef;
  blockDecorator?: BlockDecorator;
}

const defaultBlockDecorator: BlockDecorator = ({ children }) => children;

export const ContentPage = JSX<ContentPageProps>(
  ({ data: { style: pageStyle, blocks }, blockDecorator = defaultBlockDecorator }) => {
    return (
      <section className={`grid grid-cols-12 ${style2className(pageStyle)}`}>
        {blocks && blocks.map(renderBlock)}
      </section>
    );

    function renderBlock(block: BlockDef, i: number) {
      const { type } = block;
      if (!(type in Blocks)) {
        console.warn(`No block with "${type}" is registered`);
        return null;
      }

      const { style, content, blocks } = block;
      const BlockComponent = Blocks[type as keyof typeof Blocks];
      return blockDecorator({
        block,
        children: (
          <BlockComponent key={`${type}-${i}`} className={style2className(style)} {...content}>
            {blocks && blocks.map(renderBlock)}
          </BlockComponent>
        ),
      });
    }
  },
);

function style2className(style: string[] | undefined | null): string {
  return style ? style.join(' ') : '';
}
