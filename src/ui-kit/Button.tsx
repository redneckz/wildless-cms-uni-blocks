import { JSX } from '@redneckz/uni-jsx';
import type { LinkContent } from './Link';

type ButtonVariant = 'primary' | 'secondary';
export interface ButtonProps extends LinkContent {
  className?: string;
  onClick?: (ev: MouseEvent) => any;
  variant?: ButtonVariant;
}

const variantStyleMap: Record<ButtonVariant, string> = {
  primary: 'text-white bg-brand',
  secondary: 'text-brand bg-main',
};

export const Button = JSX<ButtonProps>(
  ({ className, text, href, target, onClick, children, variant = 'primary' }) => {
    return (
      <a
        className={`inline-block rounded-3xl px-9 py-3.5 text-center font-sans no-underline ${
          variantStyleMap[variant]
        } ${className || ''}`}
        href={href}
        target={target}
        onClick={onClick}
      >
        <span className="text-sm font-medium">{text || children}</span>
      </a>
    );
  },
);
