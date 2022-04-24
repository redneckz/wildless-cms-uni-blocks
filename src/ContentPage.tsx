import { JSX } from '@redneckz/uni-jsx';
import { Blocks } from './Blocks.js';
import type { BlockDef, ContentPageDef } from './types.js';

export interface ContentPageProps {
  data: ContentPageDef;
}

export const ContentPage = JSX<ContentPageProps>(({ data: { style: pageStyle, blocks } }) => (
  <section className={`grid grid-cols-12 ${style2className(pageStyle)}`}>
    {blocks && blocks.map(renderBlock)}
  </section>
));

function renderBlock({ type, style, content, blocks }: BlockDef, i: number) {
  if (!(type in Blocks)) {
    console.warn(`No block with "${type}" is registered`);
    return null;
  }
  const BlockComponent = Blocks[type as keyof typeof Blocks];
  return (
    <BlockComponent
      key={`${type}-${i}`}
      className={`border-dashed border-2 border-sky-500 p-4 ${style2className(style)}`}
      {...content}
    >
      {blocks && blocks.map(renderBlock)}
    </BlockComponent>
  );
}

function style2className(style: string[] | undefined | null): string {
  return style ? style.join(' ') : '';
}
