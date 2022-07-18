import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { Icon } from '../../ui-kit/Icon/Icon';
import type { JSXBlock } from '../ContentPage/ContentPage';
import { ContentPageContext } from '../ContentPage/ContentPageContext';
import AccordionBlocks from './AccordionBlocks';
import type { AccordionBlockProps, AccordionItemCommonProps } from './AccordionContent';

export interface AccordionItemProps extends AccordionItemCommonProps, UniBlockProps {}

export const AccordionItem = JSX<AccordionItemProps>(({ label, blocks, context }) => {
  const [isActive, setIsActive] = context.useState(false);
  const hasContent = blocks?.length;
  const icon = isActive ? 'MinusIcon' : 'PlusIcon';

  const handleToggle = (e: MouseEvent) => {
    if (!hasContent) {
      return;
    }

    setIsActive(!isActive);
    const contentBlock = getContentBlock(e);
    contentBlock.style.maxHeight = contentBlock.style.maxHeight
      ? null
      : `${contentBlock.scrollHeight}px`;
  };

  return (
    <li className="border-0 border-b border-solid border-main-divider last:border-b-0">
      <button
        className={`border-none bg-transparent px-0 py-5 flex justify-between text-left w-full font-sans text-primary-text
        ${hasContent ? 'group cursor-pointer' : ''}`}
        onClick={handleToggle}
      >
        <span
          className={`m-0 text-xl pr-2.5 font-medium ${
            hasContent ? 'group-hover:text-primary-main' : ''
          }`}
        >
          {label}
        </span>
        {hasContent ? <Icon name={icon} width="24" height="24" /> : null}
      </button>
      {hasContent ? (
        <div
          className={`${
            isActive ? 'pb-5' : ''
          } text-sm transition-all duration-300 max-h-0 overflow-hidden group-last:last:pb-0 `}
        >
          {blocks?.length ? blocks.map((block, i) => renderBlock(block, i, context)) : null}
        </div>
      ) : null}
    </li>
  );
});

const renderBlock = (block: AccordionBlockProps, i: number, context: ContentPageContext) => {
  const type = block?.accordionBlockType;
  if (!type || !(type in AccordionBlocks)) {
    return null;
  }

  const AccordionBlock: JSXBlock = AccordionBlocks[type];
  return (
    <div className="mb-5 last:mb-0" key={`block_${i}`}>
      <AccordionBlock context={context} {...block} />
    </div>
  );
};

const getContentBlock = ({ target }) =>
  target.tagName === 'BUTTON' ? target.nextSibling : target.parentNode.nextSibling;
