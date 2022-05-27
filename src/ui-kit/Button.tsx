import { JSX } from '@redneckz/uni-jsx';
import type { LinkContent } from './Link';

type ButtonVersion = 'primary' | 'secondary';
export interface ButtonProps extends LinkContent {
  className?: string;
  onClick?: (ev: MouseEvent) => any;
  version?: ButtonVersion;
  disabled?: Boolean;
}

const buttonStyleMap: Record<ButtonVersion, string> = {
  primary: 'text-white bg-primary-main hover:bg-primary-hover active:bg-primary-active',
  secondary:
    'text-primary-main bg-secondary-light hover:bg-secondary-hover active:bg-secondary-active',
};

const buttonDisabledStyleMap: Record<ButtonVersion, string> = {
  primary: 'bg-secondary-dark text-secondary-text',
  secondary: 'bg-secondary-light text-secondary-text',
};

export const Button = JSX<ButtonProps>(
  ({ className, text, href, target, onClick, children, disabled, version = 'primary' }) => {
    if (disabled) {
      return (
        <div
          className={`inline-block rounded-3xl px-9 py-3.5 text-center font-sans select-none ${
            buttonDisabledStyleMap[version]
          } ${className || ''}`}
        >
          <span className="text-sm font-medium">{text || children}</span>
        </div>
      );
    }

    return (
      <a
        className={`inline-block rounded-3xl px-9 py-3.5 text-center font-sans no-underline ${
          buttonStyleMap[version]
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
