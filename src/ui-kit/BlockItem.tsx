import { JSX } from '@redneckz/uni-jsx';

export interface BlockItemContent {
  text?: string;
}

export interface BlockItemProps extends BlockItemContent {
  className?: string;
}

export const BlockItem = JSX<BlockItemProps>(({ className, text, children }) => {
  return (
    <div className={`inline-block ${className || ''}`} role="listitem">
      <div className="inline-block w-[7px] h-[2px] bg-brand align-middle"></div>
      <span className="text-base text-second-primary font-normal font-sans mx-3 align-middle">
        {text || children}
      </span>
    </div>
  );
});
