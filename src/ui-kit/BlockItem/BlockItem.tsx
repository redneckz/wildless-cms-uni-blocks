import { JSX } from '@redneckz/uni-jsx';
import { BlockItemProps, BlockItemVersion } from './BlockItemProps';

const listStyleMap: Record<BlockItemVersion, string> = {
  primary: 'bg-primary-main w-[8px] h-[8px] min-w-[8px] min-h-[8px] mt-2 rounded-full',
  secondary: 'bg-secondary-text w-[6px] h-[6px] min-w-[6px] min-h-[6px] mt-2.5 rounded-full',
};

const textStyleMap: Record<BlockItemVersion, string> = {
  primary: 'text-primary-text',
  secondary: 'text-secondary-text',
};

export const BlockItem = JSX<BlockItemProps>(
  ({ className, isDotted = true, text, children, version = 'primary' }) => {
    return (
      <div className={`inline-block flex ${className || ''}`} role="listitem">
        {isDotted && <div className={`inline-block mr-3 ${listStyleMap[version]}`} />}
        <span className={`text-base font-normal font-sans mr-3 ${textStyleMap[version]}`}>
          {text || children}
        </span>
      </div>
    );
  },
);
