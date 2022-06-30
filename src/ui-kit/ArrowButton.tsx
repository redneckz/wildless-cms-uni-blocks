import { JSX } from '@redneckz/uni-jsx';
import { ArrowLeftIcon } from '../Icons/ArrowLeftIcon';

export interface ArrowButtonProps {
  onClick?: () => void;
  ariaLabel?: string;
  className?: string;
}

export const ArrowButton = JSX<ArrowButtonProps>(({ className, onClick, ariaLabel }) => {
  return (
    <a
      className={`${className} no-underline w-12 h-12 rounded-3xl bg-white flex text-black hover:text-primary-main`}
      style={{ boxShadow: '0px 4px 25px rgba(0, 0, 0, 0.07)' }}
      href="#"
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {ArrowLeftIcon({ className: 'm-auto text-inherit' })}
    </a>
  );
});
