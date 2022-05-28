import { JSX } from '@redneckz/uni-jsx';
import type { LinkContent } from './Link';

export interface TopItemContent extends LinkContent {
  active?: boolean;
}

export interface TopItemProps extends TopItemContent {
  className?: string;
  flat?: boolean;
  onClick?: (ev: MouseEvent) => any;
}

export const TopItem = JSX<TopItemProps>(
  ({ className, text, href, target, active, flat, onClick, children }) => {
    const linkStyle = active ? 'border-primary-main rounded-3xl' : 'border-transparent';
    const textStyle = active ? 'text-primary-main' : 'text-primary-text hover:text-primary-main';
    return (
      <a
        className={`inline-block border border-solid bg-transparent text-center no-underline ${
          flat ? '' : 'px-4 py-2'
        } ${linkStyle} ${className || ''}`}
        href={href}
        target={target}
        onClick={onClick}
      >
        <span className={`font-sans font-normal text-sm ${textStyle}`}>{text || children}</span>
      </a>
    );
  },
);
