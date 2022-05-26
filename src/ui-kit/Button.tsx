import { JSX } from '@redneckz/uni-jsx';
import type { LinkContent } from './Link';

type ButtonVersion = 'primary' | 'secondary';
export interface ButtonProps extends LinkContent {
  className?: string;
  onClick?: (ev: MouseEvent) => any;
  version?: ButtonVersion;
}

const buttonStyleMap: Record<ButtonVersion, string> = {
  primary: 'text-white bg-brand',
  secondary: 'text-brand bg-main',
};

export const Button = JSX<ButtonProps>(
  ({ className, text, href, target, onClick, children, version = 'primary' }) => {
    return (
      <a
        className={`inline-block rounded-3xl px-9 py-3.5 text-center font-sans no-underline ${buttonStyleMap[version]} ${className || ''}`}
        href={href}
        target={target}
        onClick={onClick}
      >
        <span className="text-sm font-medium">{text || children}</span>
      </a>
    );
  },
);
