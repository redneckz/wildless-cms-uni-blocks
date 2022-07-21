import { JSX } from '@redneckz/uni-jsx';
import type { ButtonProps } from '../../ui-kit/Button/ButtonProps';

export const NavigationItem = JSX<ButtonProps & { isActive: boolean }>(
  ({ className, text, onClick, href, target, isActive }) => (
    <a
      className={`bg-inherit no-underline px-4 py-2.5 cursor-pointer rounded text-sm border border-solid hover:text-primary-main ${
        className || ''
      } ${isActive ? 'border-primary-main text-primary-main' : 'border-white text-secondary-text'}`}
      onClick={onClick}
      href={href}
      target={target}
    >
      {text}
    </a>
  ),
);
