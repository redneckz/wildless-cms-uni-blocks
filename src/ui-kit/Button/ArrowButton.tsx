import { JSX } from '@redneckz/uni-jsx';
import { Button } from './Button';
import { ButtonProps } from './ButtonProps';
import { SVG } from '../SVG';

const ARROW_PATHS = [
  {
    d: 'm9 12 4-4-4-4',
    stroke: 'currentColor',
    strokeWidth: '2',
    strokeLinecap: 'round',
    fill: 'none',
  },
  {
    d: 'M2 9a1 1 0 0 1 0-2v2Zm6-2a1 1 0 0 1 0 2V7ZM2 7h6v2H2V7Z',
  },
];

export const ArrowButton = JSX<ButtonProps>(({ className, disabled, ...rest }) => (
  <Button
    rounded
    className={`shadow-[0_4px_25px_rgba(0,0,0,0.07)] w-12 h-12 min-h-12 max-h-12 flex items-center justify-center ${
      disabled
        ? 'bg-secondary-light text-secondary-text'
        : 'bg-white text-primary-text hover:text-primary-main'
    } ${className || ''}`}
    disabled={disabled}
    {...rest}
  >
    <SVG paths={ARROW_PATHS} viewBox="0 0 16 16" fill="none" width="16" height="16" />
  </Button>
));
