import { JSX } from '@redneckz/uni-jsx';
import { LinkContent } from '../model/LinkContent';
import type { UniBlockProps } from '../types';
import { Doc } from '../ui-kit/Doc';
import { Icon } from '../ui-kit/Icon';
import type { AccordionItemContent } from './AccordionContent';

export interface AccordionItemProps extends AccordionItemContent, UniBlockProps {}

export const AccordionItem = JSX<AccordionItemProps>(({ label, text, docs, context }) => {
  const [isActive, setIsActive] = context.useState(false);
  const hasContent = Boolean(text) || docs?.length;
  const icon = isActive ? 'MinusIcon' : 'PlusIcon';

  const handleToggle = (e) => {
    if (!hasContent) {
      return;
    }

    setIsActive(!isActive);
    const contentBlock =
      e.target.tagName === 'BUTTON' ? e.target.nextSibling : e.target.parentNode.nextSibling;
    contentBlock.style.maxHeight = contentBlock.style.maxHeight
      ? null
      : contentBlock.scrollHeight + 'px';
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
          {text && (
            <AccordionContainer>
              <p className="m-0">{text}</p>
            </AccordionContainer>
          )}
          {docs?.length ? (
            <AccordionContainer>
              <ul className="list-none p-0">{docs.map(renderDoc)}</ul>
            </AccordionContainer>
          ) : null}
        </div>
      ) : null}
    </li>
  );
});

const renderDoc = (doc: LinkContent, i: number) => (
  <li key={'doc' + i} className="mb-4 last:mb-0">
    <Doc {...doc} />
  </li>
);

const AccordionContainer = JSX(({ children }) => <div className="mb-5 last:mb-0">{children}</div>);
