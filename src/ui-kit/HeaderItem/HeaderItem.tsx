import { JSX } from '@redneckz/uni-jsx';
import type { TopItemProps } from '../TopItem/TopItem';

export type HeaderItemProps = TopItemProps;

const TEXT_STYLE_COLORS_SCHEME = {
  white: {
    active: 'text-primary-main',
    default: 'text-primary-text hover:text-primary-main',
  },
  transparent: {
    active: 'text-white',
    default: 'text-white',
  },
};
const BORDER_STYLE_COLORS_SCHEME = {
  white: {
    active: 'bg-primary-main',
    default: '',
  },
  transparent: {
    active: 'bg-white',
    default: '',
  },
};

export const HeaderItem = JSX<HeaderItemProps>(
  ({ className, text, href, target, active, onClick, children, bgColor = 'white' }) => {
    let textStyle = TEXT_STYLE_COLORS_SCHEME[bgColor]['default'];
    let activeBorderStyle = BORDER_STYLE_COLORS_SCHEME[bgColor]['default'];
    if (active) {
      textStyle = TEXT_STYLE_COLORS_SCHEME[bgColor]['active'];
      activeBorderStyle = BORDER_STYLE_COLORS_SCHEME[bgColor]['active'];
    }
    return (
      <a
        className={`relative inline-block bg-transparent text-center no-underline ${
          className || ''
        }`}
        href={href}
        target={target}
        onClick={onClick}
      >
        <span className={`font-sans font-normal text-base ${textStyle}`}>{text || children}</span>
        {active ? (
          <div className={`${activeBorderStyle} absolute left-0 -bottom-2 w-full h-[2px]`} />
        ) : null}
      </a>
    );
  },
);
