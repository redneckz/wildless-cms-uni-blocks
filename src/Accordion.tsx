import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from './types';
import type { DocProps } from './ui-kit/Doc';
import { Icon } from './ui-kit/Icon';
import { Doc } from './ui-kit/Doc';

export interface AccordionProps extends UniBlockProps {
  title?: string;
  items: itemProps[];
}

export interface AccordionItemProps extends UniBlockProps, itemProps {}

export interface itemProps {
  label: string;
  components?: componentProps[];
}

export interface componentProps {
  name: string;
  data: any;
}

export const Accordion = JSX<AccordionProps>(({ title, items, context }) => {
  return (
    <section className="p-[50px] font-sans bg-white text-primary-text">
      {title ? <h3 className="text-title-sm font-medium m-0 mb-2.5">{title}</h3> : null}
      {items.length > 0 ? (
        <ul className="list-none m-0 p-0">
          {items.map((item, index) => (
            <AccordionItem key={'AccordionItem' + index} {...item} context={context} />
          ))}
        </ul>
      ) : null}
    </section>
  );
});

export const AccordionItem = JSX<AccordionItemProps>(({ label, components, context }) => {
  const [isActive, toggleActive] = context.useState(0);
  const hasContent = components && components.length > 0;
  const icon = isActive ? 'MinusIcon' : 'PlusIcon';
  const handleToggle = (e) => {
    if (!hasContent) return;
    toggleActive(Number(!isActive));
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
        <h5
          className={`m-0 text-xl pr-2.5 font-medium ${
            hasContent ? 'group-hover:text-primary-main' : ''
          }`}
        >
          {label}
        </h5>
        {hasContent ? <Icon name={icon} width="24" height="24" /> : null}
      </button>
      {hasContent ? (
        <div
          className={`${
            isActive ? 'pb-5' : ''
          } text-sm transition-all duration-300 max-h-0 overflow-hidden group-last:last:pb-0 `}
        >
          {components.map(renderComponent)}
        </div>
      ) : null}
    </li>
  );
});

// TODO: draft, for dynamic rendering of components

const renderComponent = (component: componentProps, key: number) => {
  if (!COMPONENTS.hasOwnProperty(component.name)) return;
  const callCurrentComponent = COMPONENTS[component.name];
  return (
    <div className="mb-5 last:mb-0" key={'component' + key}>
      {callCurrentComponent(component.data)}
    </div>
  );
};

const DocsComponent = (data: DocProps[]) => {
  return (
    <ul className="list-none p-0">
      {data.map((item, index) => (
        <li key={'doc' + index} className="mb-4 last:mb-0">
          <Doc {...item} />
        </li>
      ))}
    </ul>
  );
};

const TextComponent = (data: string) => {
  return <p className="m-0">{data}</p>;
};

const COMPONENTS = {
  Text: TextComponent,
  Docs: DocsComponent,
};
