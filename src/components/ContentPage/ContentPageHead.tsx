import { JSX } from '@redneckz/uni-jsx';
import type { ContentPageMeta } from '../../types';

export interface ContentPageHeadProps {
  HeadComponent: Function;
  data: ContentPageMeta;
}

export const ContentPageHead = JSX<ContentPageHeadProps>(({ HeadComponent, data, children }) => {
  const { title, description, keywords, robots, og } = data;
  return (
    <HeadComponent>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords.join(',')} />}
      {robots && <meta name="robots" content={robots.join(',')} />}
      {og
        ? Object.entries(og).map(([key, value]) => (
            <meta key={key} name={`og:${key}`} content={value} />
          ))
        : null}
      {children}
    </HeadComponent>
  );
});
