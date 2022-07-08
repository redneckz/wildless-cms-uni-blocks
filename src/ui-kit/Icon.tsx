import { JSX } from '@redneckz/uni-jsx';
import { projectSettings } from '../ProjectSettings';
import type { IconProps } from './IconProps';

export const Icon = JSX<IconProps>(
  ({ className, name, alt = `Icon ${name}`, title = alt, ...imgProps }) => (
    <svg className={className} {...imgProps} aria-hidden="true">
      {title ? <title>{title}</title> : null}
      {alt ? <desc>{alt}</desc> : null}
      <use
        href={`${projectSettings.CDN || ''}icons/${name}.svg#icon`}
        xlinkHref={`${projectSettings.CDN || ''}icons/${name}.svg#icon`}
      ></use>
    </svg>
  ),
);
