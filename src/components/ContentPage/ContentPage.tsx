import { JSX, PropsWithChildren } from '@redneckz/uni-jsx';
import type { BlockDef, ContentPageDef, UniBlockProps } from '../../types';
import type { BlockContent } from '../BlockContent';
import { LikeControl } from '../LikeControl/LikeControl';
import { Placeholder } from '../Placeholder/Placeholder';
import { ContentPageContext } from './ContentPageContext';

interface BlockDecoratorProps<VNode> {
  blockClassName: string;
  block: BlockDef;
  render: (props: { blockClassName: string; block: BlockDef }) => VNode;
}

export type BlockDecorator<VNode = any> = (
  props: BlockDecoratorProps<VNode>,
  index?: number | string,
) => any;

export type JSXBlock = (
  props: PropsWithChildren<UniBlockProps & BlockContent, any>,
  context?: any,
) => any;

export type BlocksRegistry = Record<string, JSXBlock>;

export interface ContentPageProps extends UniBlockProps {
  blocksRegistry: BlocksRegistry;
  data: ContentPageDef;
  blockDecorator?: BlockDecorator;
}

export interface RenderBlockFunc {
  block: BlockDef;
  blockDecorator: BlockDecorator;
  blocksRegistry: BlocksRegistry;
  context: ContentPageContext;
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
    const { header } = slots;

    return (
      <section
        className={`relative ${style2className(pageStyle)} ${className || ''}`}
        data-theme={colorPalette}
      >
        {header?.blocks?.length ? (
          <div className={`${style2className(header?.style)}`}>
            {header.blocks.map((block, i) =>
              renderBlock({ block, blockDecorator, blocksRegistry, context }, i),
            )}
          </div>
        ) : null}

        {blocks?.length ? (
          <div className="container grid grid-cols-12 gap-1">
            {blocks.map((block, i) =>
              renderBlock({ block, blockDecorator, blocksRegistry, context }, i),
            )}
          </div>
        ) : null}

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
  },
);

function renderBlock(
  { block, blockDecorator, blocksRegistry, context }: RenderBlockFunc,
  i: number,
) {
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
            {blocks?.length
              ? blocks.map((block, i) =>
                  renderBlock({ block, blockDecorator, blocksRegistry, context }, i),
                )
              : null}
          </BlockComponent>
        );
      },
    },
    `block-${i}`,
  );
}

function style2className(style: string[] | undefined | null): string {
  return style ? style.join(' ') : '';
}
