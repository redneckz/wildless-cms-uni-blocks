import { JSX } from '@redneckz/uni-jsx';
import type { TopItemProps } from '../TopItem/TopItem';

export type HeaderItemProps = TopItemProps;

export const HeaderItem = JSX<HeaderItemProps>(
  ({ className, text, href, target, active, onClick, children }) => {
    const textStyle = active ? 'text-primary-main' : 'text-primary-text hover:text-primary-main';
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
          <div className="absolute left-0 -bottom-2 w-full h-[2px] bg-primary-main" />
        ) : null}
      </a>
    );
  },
);
