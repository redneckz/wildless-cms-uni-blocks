import { JSX } from '@redneckz/uni-jsx';
import { useLink } from '../../hooks/useLink';
import { LinkProps } from '../../model/LinkProps';
import type { FooterLink } from './FooterLink';

export const HorizontalNavigation = JSX<FooterLink>(({ className, links, context }) => {
  const router = context.useRouter();
  const { handlerDecorator } = context;

  return (
    <div className={`${className || ''}`}>
      {links?.length ? (
        <div className="flex justify-between items-center gap-5 py-5 border-solid border-x-0 border-y border-y-main-divider">
          {links.map((_, i) => (
            <HorizontalNavigationLink
              key={String(i)}
              index={i}
              {...useLink({ router, handlerDecorator }, _)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
});

interface HorizontalNavigationLinkProps extends LinkProps {
  className: string;
  index: number;
  onClick: (ev: MouseEvent) => any;
}

const HorizontalNavigationLink = JSX<Partial<HorizontalNavigationLinkProps>>(
  ({ className, index, text, href, target, onClick }) => (
    <a
      className={`font-sans font-normal text-sm text-secondary-text hover:text-primary-main inline-block no-underline max-w-[292px] ${
        className || ''
      }`}
      href={href}
      target={target}
      onClick={onClick}
    >
      {text || `Документ ${index}`}
    </a>
  ),
);
