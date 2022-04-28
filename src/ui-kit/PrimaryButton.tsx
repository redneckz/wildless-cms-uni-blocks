import { JSX } from '@redneckz/uni-jsx';
import type { ButtonContent, ButtonProps } from './Button';

export type PrimaryButtonContent = ButtonContent;
export type PrimaryButtonProps = ButtonProps;

export const PrimaryButton = JSX<PrimaryButtonProps>(
  ({ className, text, href, target, onClick, children }) => {
    return (
      <a
        className={`inline-block bg-brand rounded-3xl px-9 py-3.5 text-center font-sans no-underline ${
          className || ''
        }`}
        href={href}
        target={target}
        onClick={onClick}
      >
        <span className="text-white text-sm font-medium">{text || children}</span>
      </a>
    );
  },
);
