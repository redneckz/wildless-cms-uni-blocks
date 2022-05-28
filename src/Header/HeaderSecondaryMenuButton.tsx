import { JSX } from '@redneckz/uni-jsx';

interface HeaderSecondaryMenuButtonProps {
  className?: string;
}

export const HeaderSecondaryMenuButton = JSX<HeaderSecondaryMenuButtonProps>(
  ({ className, children }) => (
    <button
      type="button"
      className={`border-0 p-0 w-[24px] flex items-center bg-inherit cursor-pointer ${
        className || ''
      }`}
      disabled={true}
    >
      {children}
    </button>
  ),
);
