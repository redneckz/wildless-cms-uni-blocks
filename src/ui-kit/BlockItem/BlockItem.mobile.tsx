import { JSX } from '@redneckz/uni-jsx';
import { BlockItemProps, BlockItemVersion } from './BlockItemProps';

const listStyleMap: Record<BlockItemVersion, string> = {
  primary: 'bg-secondary-text w-[6px] h-[6px] min-w-[6px] min-h-[6px] mt-2.5 rounded-full',
  secondary: 'bg-white w-[6px] h-[6px] min-w-[6px] min-h-[6px] mt-2.5 rounded-full',
};

const textStyleMap: Record<BlockItemVersion, string> = {
  primary: 'text-secondary-text',
  secondary: '',
};

export const BlockItem = JSX<BlockItemProps>(
  ({ className, isDotted = true, text, children, version = 'primary' }) => {
    return (
      <div className={`inline-block flex ${className || ''}`} role="listitem">
        {isDotted && <div className={`inline-block mr-3 ${listStyleMap[version]}`} />}
        <span className={`text-base font-normal font-sans ${textStyleMap[version]}`}>
          {text || children}
        </span>
      </div>
    );
  },
);
