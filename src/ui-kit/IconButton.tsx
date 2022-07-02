import { JSX } from '@redneckz/uni-jsx';
import type { ButtonProps } from './Button';
import { Button } from './Button';
import { Icon, IconName } from './Icon';

export interface IconButtonProps extends ButtonProps {
  icon?: IconName;
  aboveText?: string;
}

export const IconButton = JSX<IconButtonProps>((props) => {
  return (
    <Button {...props}>
      {props.icon ? (
        <div className="flex items-center py-2 px-8">
          <div className="mr-2">
            <Icon name={props.icon} width="24" height="24" />
          </div>
          <div>
            <div className="text-xxs text-left">{props.aboveText}</div>
            <div className="text-sm font-medium text-left">{props.text}</div>
          </div>
        </div>
      ) : null}
    </Button>
  );
});
