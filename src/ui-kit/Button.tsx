import { JSX } from '@redneckz/uni-jsx';
import type { ButtonVersion } from '../model/ButtonVersion';
import type { ButtonProps } from './ButtonProps';

const buttonStyleMap: Record<ButtonVersion, string> = {
  primary: 'text-white bg-primary-main hover:bg-primary-hover active:bg-primary-active',
  secondary:
    'text-primary-main bg-secondary-light hover:bg-secondary-hover active:bg-secondary-active',
};

const buttonDisabledStyleMap: Record<ButtonVersion, string> = {
  primary: 'bg-secondary-dark text-secondary-text',
  secondary: 'bg-secondary-light text-secondary-text',
};

const styleButton = 'inline-block rounded-md px-8 py-2 text-center font-sans';

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
          className={`${styleButton} select-none ${buttonDisabledStyleMap[version]} ${
            className || ''
          }`}
        >
          {children ? (
            <div>{children}</div>
          ) : (
            <div className="text-sm font-medium py-1.5">{text}</div>
          )}
        </div>
      );
    }

    return (
      <a
        className={`${styleButton} no-underline ${buttonStyleMap[version]} ${className || ''}`}
        href={href}
        target={target}
        onClick={onClick}
        aria-label={ariaLabel}
      >
        {children ? (
          <div>{children}</div>
        ) : (
          <div className="text-sm font-medium py-1.5">{text}</div>
        )}
      </a>
    );
  },
);
