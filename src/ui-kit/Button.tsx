import { JSX } from '@redneckz/uni-jsx';
import type { ButtonVersion, LinkContent } from '../types';

export interface ButtonProps extends LinkContent {
  className?: string;
  onClick?: (ev: MouseEvent) => any;
  version?: ButtonVersion;
  ariaLabel?: string;
  disabled?: Boolean;
}

const buttonStyleMap: Record<ButtonVersion, string> = {
  primary: 'text-white bg-primary-main hover:bg-primary-hover active:bg-primary-active',
  secondary:
    'text-primary-main bg-secondary-light hover:bg-secondary-hover active:bg-secondary-active',
  white: 'text-primary-main bg-white hover:bg-secondary-hover active:bg-secondary-active',
  'outline-main':
    'border-main-stroke border-solid border text-primary-text bg-white hover:border-primary-main hover:text-primary-main ',
};

const buttonDisabledStyleMap: Record<ButtonVersion, string> = {
  primary: 'bg-secondary-dark text-secondary-text',
  secondary: 'bg-secondary-light text-secondary-text',
  get white() {
    return this.secondary;
  },
  get 'outline-main'() {
    return this.secondary;
  },
};

const styleButton = 'inline-block rounded-md text-center font-sans select-none';

export const Button = JSX<ButtonProps>(
  ({
    className,
    text,
    href,
    target,
    onClick,
    children,
    disabled,
    version = 'primary',
    ariaLabel,
  }) => {
    if (disabled) {
      return (
        <div
          role="button"
          aria-disabled="true"
          aria-label={ariaLabel}
          tabIndex="-1"
          className={`${styleButton} ${buttonDisabledStyleMap[version]} ${className || ''}`}
        >
          {children ?? <div className="text-sm px-8 font-medium py-[13px]">{text}</div>}
        </div>
      );
    }

    return (
      <a
        className={`${styleButton} cursor-pointer no-underline ${buttonStyleMap[version]} ${
          className || ''
        }`}
        href={href}
        target={target}
        onClick={onClick}
        aria-label={ariaLabel}
      >
        {children ?? <div className="text-sm px-8 font-medium py-[13px]">{text}</div>}
      </a>
    );
  },
);
