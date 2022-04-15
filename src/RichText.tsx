import { JSX } from '@redneckz/uni-jsx';

export interface RichTextContent {
  __html?: string;
}

export interface RichTextProps extends RichTextContent {
  className?: string;
}

export const RichText = JSX<RichTextProps>(({ className, __html }) => {
  const props = Object.assign(
    { className: className || '' },
    __html ? { dangerouslySetInnerHTML: { __html } } : {}
  );
  return <div {...props} />;
});
