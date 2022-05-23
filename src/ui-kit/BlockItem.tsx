import { JSX } from '@redneckz/uni-jsx';

export interface BlockItemContent {
  text?: string;
}

export interface BlockItemProps extends BlockItemContent {
  className?: string;
}

export const BlockItem = JSX<BlockItemProps>(({ className, text, children }) => {
  return (
    <div className={`inline-block flex items-center ${className || ''}`} role="listitem">
      <div className="inline-block min-w-[7px] h-[2px] bg-brand"></div>
      <span className="text-base text-secondary font-normal font-sans mx-3">
        {text || children}
      </span>
    </div>
  );
});
