import { JSX } from '@redneckz/uni-jsx';

export interface ArrowButtonProps {
  onClick?: () => void;
  ariaLabel?: string;
  className?: string;
}

export const ArrowButton = JSX<ArrowButtonProps>(({ className, onClick, ariaLabel }) => {
  return (
    <button
      className={`${className} border-none no-underline w-12 h-12 rounded-3xl bg-white flex text-black hover:text-primary-main`}
      style={{ boxShadow: '0px 4px 25px rgba(0, 0, 0, 0.07)' }}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <svg
        className="m-auto"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7 12L3 8L7 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path
          d="M14 9C14.5523 9 15 8.55228 15 8C15 7.44772 14.5523 7 14 7L14 9ZM8 7C7.44772 7 7 7.44772 7 8C7 8.55229 7.44772 9 8 9L8 7ZM14 7L8 7L8 9L14 9L14 7Z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
});
