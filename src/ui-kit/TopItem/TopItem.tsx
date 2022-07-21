import { JSX } from '@redneckz/uni-jsx';
import { BgColorVersion } from '../../model/BgColorVersion';
import type { LinkProps } from '../../model/LinkProps';

export interface TopItemContent extends LinkProps {
  active?: boolean;
}

export interface TopItemProps extends TopItemContent {
  className?: string;
  flat?: boolean;
  ariaLabel?: string;
  onClick?: (ev: MouseEvent) => any;
  bgColor?: BgColorVersion;
}

const TEXT_CLASSES = 'font-sans font-normal text-sm';
const LINK_CLASSES = 'inline-block border border-solid bg-transparent text-center no-underline';

export const TopItem = JSX<TopItemProps>(
  ({
    className = '',
    text,
    href,
    target,
    active,
    flat,
    onClick,
    children,
    ariaLabel,
    bgColor = 'bg-white',
  }) => (
    <a
      className={`${getLinkClasses(bgColor, active, flat)} ${className}`}
      href={href}
      target={target}
      onClick={onClick}
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      <span className={getTextClasses(bgColor, active, flat)}>{text || children}</span>
    </a>
  ),
);

const getLinkClasses = (bgColor: BgColorVersion, active?: boolean, flat?: boolean) => {
  let classes = 'border-transparent';
  if (active) {
    classes = `rounded-md ${bgColor === 'bg-white' ? 'border-primary-main' : 'border-white'}`;
  }

  return `${classes} ${LINK_CLASSES} ${flat ? '' : 'px-4 py-2'}`;
};

const getTextClasses = (bgColor: BgColorVersion, active?: boolean, flat?: boolean) => {
  let classes = 'text-white';
  if (bgColor === 'bg-white') {
    classes = active
      ? 'text-primary-main'
      : `${flat ? 'text-primary-text' : 'text-secondary-text'} hover:text-primary-main`;
  }

  return `${classes} ${TEXT_CLASSES}`;
};
