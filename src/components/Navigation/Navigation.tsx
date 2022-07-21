import { JSX } from '@redneckz/uni-jsx';
import { useLink } from '../../hooks/useLink';
import { findActiveSubItem } from '../../services/sitemap/findActiveSubItem';
import type { UniBlockProps } from '../../types';
import { NavigationContent } from './NavigationContent';
import { NavigationItem } from './NavigationItem';

export interface NavigationProps extends NavigationContent, UniBlockProps {}

export const Navigation = JSX<NavigationProps>(({ className, context, title, buttons }) => {
  const router = context.useRouter();
  const { handlerDecorator } = context;

  const activeButton = findActiveSubItem(router)(buttons);

  return (
    <section
      className={`font-sans text-primary-text rounded-[40px] flex items-center justify-between ${
        className || ''
      }`}
    >
      <h2 className="font-medium text-xl m-0">{title}</h2>
      {buttons?.length ? (
        <div className="flex rounded-md overflow-hidden bg-white">
          {buttons
            .filter(({ text }) => text)
            .map((button, i) => (
              <NavigationItem
                key={String(i)}
                className="first:rounded-tl-md first:rounded-bl-md last:rounded-tr-md last:rounded-br-md"
                isActive={button === activeButton}
                {...useLink({ router, handlerDecorator }, button)}
              />
            ))}
        </div>
      ) : null}
    </section>
  );
});
