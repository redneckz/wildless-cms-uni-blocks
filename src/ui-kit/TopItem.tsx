import { JSX } from '@redneckz/uni-jsx';

export interface TopItemContent {
  text?: string;
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top' | string;
  active?: boolean;
  onClick?: () => any;
}

export interface TopItemProps extends TopItemContent {
  className?: string;
}

export const TopItem = JSX<TopItemProps>(
  ({ className, text, href, target, active, onClick, children }) => {
    const linkStyle = active ? 'border-brand rounded-3xl' : 'border-transparent';
    const textStyle = active ? 'text-brand' : 'text-black hover:text-brand';
    return (
      <a
        className={`${linkStyle} border border-solid inline-block bg-transparent px-4 py-2 text-center font-sans no-underline ${
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
