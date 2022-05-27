import { JSX } from '@redneckz/uni-jsx';
import type { TopItemProps } from './TopItem';

export type HeaderItemProps = TopItemProps;

export const HeaderItem = JSX<HeaderItemProps>(
  ({ className, text, href, target, active, onClick, children }) => {
    const linkStyle = active ? 'border-b-primary-main' : 'border-transparent';
    const textStyle = active ? 'text-primary-main' : 'text-black hover:text-primary-main';
    return (
      <a
        className={`${linkStyle} border-0 border-b-2 border-solid inline-block bg-transparent py-2 text-center font-sans no-underline ${
          className || ''
        }`}
        href={href}
        target={target}
        onClick={onClick}
      >
        <span className={`${textStyle} text-base font-normal`}>{text || children}</span>
      </a>
    );
  },
);
