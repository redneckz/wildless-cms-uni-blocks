import { JSX } from '@redneckz/uni-jsx';

export interface TextContent {
  primary?: string;
  secondary?: string;
}

export interface TextProps extends TextContent {
  className?: string;
}

export const Text = JSX<TextProps>(
  ({ className, primary, secondary, children }) => {
    return (
      <div className={className || ''}>
        {primary && (
          <p className="font-bold text-slate-700 leading-snug">{primary}</p>
        )}
        {secondary && (
          <p className="mt-2 text-sm text-slate-600">{secondary}</p>
        )}
        {children}
      </div>
    );
  }
);
