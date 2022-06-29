import { JSX } from '@redneckz/uni-jsx';
import { ArrowLeftIcon, ArrowRightIcon } from '../Icons';
import type { ArrowButtonVersion } from '../types';

export interface ArrowButtonProps {
  onClick?: () => void;
  ariaLabel?: string;
  className?: string;
  version?: ArrowButtonVersion;
}

const buttonIconMap: Record<ArrowButtonVersion, any> = {
  left: ArrowLeftIcon,
  right: ArrowRightIcon,
};

export const ArrowButton = JSX<ArrowButtonProps>(
  ({ className, onClick, version = 'left', ariaLabel }) => {
    return (
      <a
        className={`${className} no-underline w-12 h-12 rounded-3xl bg-white flex text-black hover:text-primary-main`}
        style={{ boxShadow: '0px 4px 25px rgba(0, 0, 0, 0.07)' }}
        href="#"
        onClick={onClick}
        aria-label={ariaLabel}
      >
        {buttonIconMap[version]({ className: 'm-auto text-inherit' })}
      </a>
    );
  },
);
