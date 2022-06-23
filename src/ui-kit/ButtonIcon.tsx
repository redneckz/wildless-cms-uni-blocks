import { JSX } from '@redneckz/uni-jsx';
import { AppleIcon, PlayMarket } from '../Icons';
import type { ButtonProps } from './Button';
import { Button } from './Button';

const ICONS = { AppleIcon, PlayMarket };

export interface ButtonIconProps extends ButtonProps {
  icon?: string;
  aboveText?: string;
}

export const ButtonIcon = JSX<ButtonIconProps>((props) => {
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
