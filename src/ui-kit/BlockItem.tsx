import { JSX } from '@redneckz/uni-jsx';

type BlockItemVariant = 'primary' | 'secondary';
export interface BlockItemContent {
  text?: string;
}

export interface BlockItemProps extends BlockItemContent {
  className?: string;
  variant?: BlockItemVariant;
}

const variantListStyleMap: Record<BlockItemVariant, string> = {
  primary: 'bg-brand',
  secondary: 'bg-white',
}

const variantTextStyleMap: Record<BlockItemVariant, string> = {
  primary: 'text-primary-text',
  secondary: 'text-white',
}

export const BlockItem = JSX<BlockItemProps>(({ className, text, children, variant = 'primary' }) => {
  return (
    <div className={`inline-block flex items-center ${className || ''}`} role="listitem">
      <div className={`inline-block w-[8px] h-[8px] rounded-full ${variantListStyleMap[variant]}`}></div>
      <span className={`text-base font-normal font-sans mx-3 ${variantTextStyleMap[variant]}`}>
        {text || children}
      </span>
    </div>
  );
});
