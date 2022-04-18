import { JSX } from '@redneckz/uni-jsx';

export interface RichTextContent {
  __html?: string;
  __md?: string;
}

export interface RichTextProps extends RichTextContent {
  className?: string;
}

export const RichText = JSX<RichTextProps>(({ className, __html, __md }) => {
  const html = __html || __md;
  const props = Object.assign(
    { className: className || '' },
    html ? { dangerouslySetInnerHTML: { __html: html } } : {}
  );
  return <div {...props} />;
});
