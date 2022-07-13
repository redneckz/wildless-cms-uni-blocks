import { JSX } from '@redneckz/uni-jsx';

interface HeaderSecondaryMenuButtonProps {
  className?: string;
  ariaLabel?: string;
}

export const HeaderSecondaryMenuButton = JSX<HeaderSecondaryMenuButtonProps>(
  ({ className, children, ariaLabel }) => (
    <button
      type="button"
      className={`border-0 p-0 w-[24px] h-[24px] flex items-center bg-inherit cursor-pointer ${
        className || ''
      }`}
      disabled={true}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  ),
);
