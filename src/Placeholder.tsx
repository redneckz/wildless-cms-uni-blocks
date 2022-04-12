import { JSX } from '@redneckz/uni-jsx';

export interface PlaceholderContent {
}

export interface PlaceholderProps extends PlaceholderContent {
  className?: string;
}

export const Placeholder = JSX<PlaceholderProps>(({ className, children }) => {
  return <div className={className || ''}>{children}</div>;
});
