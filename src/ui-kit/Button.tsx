import { JSX } from '@redneckz/uni-jsx';
import type { LinkContent } from './Link';
import { Variants } from './Link';

export interface ButtonProps extends LinkContent {
  className?: string;
  onClick?: (ev: MouseEvent) => any;
}

export const Button = JSX<ButtonProps>(
  ({ className, text, href, target, onClick, children, variant = 'primary' }) => {
    return (
      <a
        className={`btn ${Variants[variant]} ${className || ''}`}
        href={href}
        target={target}
        onClick={onClick}
      >
        <span className="text-sm font-medium">{text || children}</span>
      </a>
    );
  },
);
