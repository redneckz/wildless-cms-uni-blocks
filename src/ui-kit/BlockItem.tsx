import { JSX } from '@redneckz/uni-jsx';

type BlockItemVersion = 'primary' | 'secondary';
export interface BlockItemContent {
  text?: string;
}

export interface BlockItemProps extends BlockItemContent {
  className?: string;
  version?: BlockItemVersion;
}

const listStyleMap: Record<BlockItemVersion, string> = {
  primary: 'bg-brand',
  secondary: 'bg-white',
}

const textStyleMap: Record<BlockItemVersion, string> = {
  primary: 'text-primary-text',
  secondary: 'text-white',
}

export const BlockItem = JSX<BlockItemProps>(({ className, text, children, version = 'primary' }) => {
  return (
    <div className={`inline-block flex items-center ${className || ''}`} role="listitem">
      <div className={`inline-block w-[8px] h-[8px] rounded-full ${listStyleMap[version]}`}></div>
      <span className={`text-base font-normal font-sans mx-3 ${textStyleMap[version]}`}>
        {text || children}
      </span>
    </div>
  );
});
