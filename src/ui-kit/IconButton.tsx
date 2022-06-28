import { JSX } from '@redneckz/uni-jsx';
import { AppleIcon, PlayMarketIcon } from '../Icons/index';
import type { ButtonProps } from './Button';
import { Button } from './Button';

const ICONS = { AppleIcon, PlayMarketIcon };

export interface IconButtonProps extends ButtonProps {
  icon?: string;
  aboveText?: string;
}

export const IconButton = JSX<IconButtonProps>((props) => {
  return (
    <Button {...props}>
      {props.icon ? (
        <div className="flex items-center">
          <div className="mr-2">{ICONS[props.icon as keyof typeof ICONS]?.()}</div>
          <div>
            <div className="text-xxs text-left">{props.aboveText}</div>
            <div className="text-sm font-medium text-left">{props.text}</div>
          </div>
        </div>
      ) : null}
    </Button>
  );
});
