import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../types';
import { Button } from '../ui-kit/Button';
import { useLink } from '../useLink';
import type { ContactInfo } from './FooterContent';

export interface ContactsProps extends UniBlockProps {
  items?: ContactInfo[];
  hasButton?: boolean;
}

export const Contacts = JSX<ContactsProps>(({ className, items, hasButton, context }) => {
  const router = context.useRouter();
  const { handlerDecorator } = context;

  return (
    <div className={`flex flex-col ${className || ''}`}>
      {items?.length ? items.map(renderContact) : null}
      {hasButton ? (
        <Button
          version="primary"
          className="my-4"
          {...useLink(
            { router, handlerDecorator },
            {
              text: 'Обратная связь',
              href: '/',
              target: '_blank',
            },
          )}
        />
      ) : null}
    </div>
  );
});

const renderContact = (item: ContactInfo, index: number) => {
  const { type, text, description } = item;

  return (
    <div className="mb-4" key={String(index)}>
      <div>{renderText(type, text)}</div>
      <div className="font-sans text-sm text-secondary-text">{description}</div>
    </div>
  );
};

const renderText = (type: ContactInfo['type'], text: string) => {
  switch (type) {
    case 'tel':
      return (
        <a
          className="font-sans font-medium text-xl text-primary-text no-underline"
          href={`tel:${formatTel(text)}`}
        >
          {text}
        </a>
      );
    case 'email':
      return (
        <a
          className="font-sans font-medium text-xl text-primary-text no-underline"
          href={`mailto:${text}`}
        >
          {text}
        </a>
      );
    default:
      return <span>{text}</span>;
  }
};

const formatTel = (s: string) => s.replaceAll(/(\-|\s|\(|\)|\D+)/g, '');
