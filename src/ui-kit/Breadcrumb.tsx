import { JSX } from '@redneckz/uni-jsx';
import type { LinkContent } from '../model/LinkContent';

export interface BreadcrumbProps extends LinkContent {
  className?: string;
  onClick?: (ev: MouseEvent) => any;
}

export const Breadcrumb = JSX<BreadcrumbProps>(
  ({ text, href, target, onClick, className, children }) => {
    if (href) {
      return (
        <a
          className={`no-underline ${className || ''}`}
          href={href}
          target={target}
          onClick={onClick}
        >
          <span className={`${className || ''}`}>{text || children}</span>
        </a>
      );
    } else {
      return <span className={`${className || ''}`}>{text || children}</span>;
    }
  },
);
