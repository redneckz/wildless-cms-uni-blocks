import { JSX } from '@redneckz/uni-jsx';
import { UniBlocksComponentProps, ContactInfo } from '../types';
import { Button } from '../ui-kit/Button';
import { useLink } from '../useLink';

export interface ContactsProps extends UniBlocksComponentProps {
  items?: ContactInfo[];
  hasButton?: boolean;
  buttonText?: string;
  buttonHref?: string;
  buttonTargetBlank?: boolean;
}

export const Contacts = JSX<ContactsProps>(
  ({ className, items, hasButton, buttonText, buttonHref, buttonTargetBlank, context }) => {
    const router = context.useRouter();
    const { handlerDecorator } = context;

    return (
      <div className={`flex flex-col ${className || ''}`}>
        {items?.length ? items.map(renderContact) : null}
        {hasButton ? (
          <Button
            className="my-4"
            {...useLink(
              { router, handlerDecorator },
              {
                text: buttonText || 'Обратная связь',
                href: buttonHref || '/',
                target: buttonTargetBlank ? '_blank' : '_self',
              },
            )}
          />
        ) : null}
      </div>
    );
  },
);

const renderContact = (item: ContactInfo, index: number) => {
  const { type, text, description } = item;

  return (
    <div className="mb-4" key={String(index)}>
      <div>{renderText(type, text)}</div>
      <div className="font-sans text-text-sm text-secondary-text">{description}</div>
    </div>
  );
};

const renderText = (type: ContactInfo['type'], text: string) => {
  switch (type) {
    case 'tel':
      return (
        <a
          className="font-sans font-normal text-xl text-primary-text no-underline"
          href={`tel:${formatTel(text)}`}
        >
          {text}
        </a>
      );
    case 'email':
      return (
        <a
          className="font-sans font-normal text-xl text-primary-text no-underline"
          href={`mailto:${text}`}
        >
          {text}
        </a>
      );
    default:
      return <span>{text}</span>;
  }
};

const formatTel = (s: string) => s.replace('+7', '8').replaceAll(/(\-|\s|\(|\)|\D+)/g, '');
