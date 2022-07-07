import { JSX } from '@redneckz/uni-jsx';
import { projectSettings } from '../../ProjectSettings';
import type { IconProps } from './IconProps';

export const Icon = JSX<IconProps>(
  ({ className, name, alt = `Icon ${name}`, title = alt, ...imgProps }) => (
    <img
      className={className}
      src={`${projectSettings.CDN || ''}icons/${name}.svg`}
      alt={alt}
      title={title}
      {...imgProps}
    />
  ),
);
