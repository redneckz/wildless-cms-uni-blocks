import { JSX } from '@redneckz/uni-jsx';
import type { LinkContent } from '../types';

export interface TopItemContent extends LinkContent {
  active?: boolean;
}

export interface TopItemProps extends TopItemContent {
  className?: string;
  flat?: boolean;
  ariaLabel?: string;
  onClick?: (ev: MouseEvent) => any;
}

export const TopItem = JSX<TopItemProps>(
  ({ className, text, href, target, active, flat, onClick, children, ariaLabel }) => {
    const linkStyle = active ? 'border-primary-main rounded-3xl' : 'border-transparent';
    const textStyle = active
      ? 'text-primary-main'
      : `${flat ? 'text-primary-text' : 'text-secondary-text'} hover:text-primary-main`;

    return (
      <a
        className={`inline-block border border-solid bg-transparent text-center no-underline ${
          flat ? '' : 'px-4 py-2'
        } ${linkStyle} ${className || ''}`}
        href={href}
        target={target}
        onClick={onClick}
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        tabindex="0"
      >
        <span className={`font-sans font-normal text-sm ${textStyle}`} aria-hidden="true">
          {text || children}
        </span>
      </a>
    );
  },
);
