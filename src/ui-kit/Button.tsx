import { JSX } from '@redneckz/uni-jsx';
import type { ButtonVersion, LinkContent } from '../types';
import { Icon, IconName, IconProps } from './Icon';

export interface ButtonInnerProps {
  text?: string;
  aboveText?: string;
  icon?: IconName;
  iconProps?: Omit<IconProps, 'name'>;
  rounded?: boolean;
}

export interface ButtonProps extends LinkContent, ButtonInnerProps {
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
};

const buttonDisabledStyleMap: Record<ButtonVersion, string> = {
  primary: 'bg-secondary-dark text-secondary-text',
  secondary: 'bg-secondary-light text-secondary-text',
};

const styleButton = 'inline-block text-center font-sans select-none';

export const Button = JSX<ButtonProps>(
  ({
    className,
    text,
    aboveText,
    icon,
    iconProps,
    href,
    target,
    onClick,
    children,
    disabled,
    rounded,
    version = 'none',
    ariaLabel,
  }) => {
    const buttonInner = children ?? (
      <ButtonInner
        text={text}
        aboveText={aboveText}
        icon={icon}
        iconProps={iconProps}
        rounded={rounded}
      />
    );

    console.log(disabled);

    if (disabled) {
      return (
        <div
          role="button"
          aria-disabled="true"
          aria-label={ariaLabel}
          tabIndex="-1"
          className={`${styleButton} ${buttonDisabledStyleMap[version] || ''} ${
            rounded ? 'rounded-full' : 'rounded-md'
          } ${className || ''}`}
        >
          {buttonInner}
        </div>
      );
    }

    return (
      <a
        className={`${styleButton} cursor-pointer no-underline ${buttonStyleMap[version] || ''} ${
          rounded ? 'rounded-full' : 'rounded-md'
        } ${className || ''}`}
        href={href}
        target={target}
        onClick={onClick}
        aria-label={ariaLabel}
      >
        {buttonInner}
      </a>
    );
  },
);

export const ButtonInner = JSX<ButtonInnerProps>(
  ({ text, aboveText, icon, iconProps, rounded }) => {
    const onlyIcon = !text && !aboveText && Boolean(icon);

    const buttonInnerClasses = `flex items-center ${
      onlyIcon
        ? 'h-12 w-12 min-h-12 min-w-12 justify-center'
        : `px-8 gap-2 ${aboveText ? 'py-2' : 'py-[13px]'}`
    }  ${rounded ? 'rounded-full' : ''}`;

    return (
      <div className={buttonInnerClasses}>
        {icon && (
          <div>
            <Icon name={icon} width="24" height="24" {...iconProps} />
          </div>
        )}
        <div>
          <div className="text-xxs text-left">{aboveText}</div>
          <div className="text-sm font-medium text-left">{text}</div>
        </div>
      </div>
    );
  },
);
