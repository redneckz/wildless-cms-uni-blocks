import { JSX } from '@redneckz/uni-jsx';
import type { LinkProps } from '../../model/LinkProps';

export interface TopItemContent extends LinkProps {
  active?: boolean;
}

export interface TopItemProps extends TopItemContent {
  className?: string;
  flat?: boolean;
  ariaLabel?: string;
  onClick?: (ev: MouseEvent) => any;
  bgColorScheme?: string;
}

export const TopItem = JSX<TopItemProps>(
  ({
    className,
    text,
    href,
    target,
    active,
    flat,
    onClick,
    children,
    ariaLabel,
    bgColorScheme = 'white',
  }) => {
    const LINK_STYLE_COLORS_SCHEME = {
      white: {
        active: 'border-primary-main rounded-md',
        default: 'border-transparent',
      },
      transparent: {
        active: 'border-white rounded-md',
        default: 'border-transparent',
      },
    };
    const TEXT_STYLE_COLORS_SCHEME = {
      white: {
        active: 'text-primary-main',
        default: `${flat ? 'text-primary-text' : 'text-secondary-text'} hover:text-primary-main`,
      },
      transparent: {
        active: 'text-white',
        default: 'text-white',
      },
    };

    let linkStyle = LINK_STYLE_COLORS_SCHEME[bgColorScheme]['default'];
    let textStyle = TEXT_STYLE_COLORS_SCHEME[bgColorScheme]['default'];
    if (active) {
      linkStyle = LINK_STYLE_COLORS_SCHEME[bgColorScheme]['active'];
      textStyle = TEXT_STYLE_COLORS_SCHEME[bgColorScheme]['active'];
    }

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
      >
        <span className={`font-sans font-normal text-sm ${textStyle}`}>{text || children}</span>
      </a>
    );
  },
);
