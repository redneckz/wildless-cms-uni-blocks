import { JSX } from '@redneckz/uni-jsx';
import { projectSettings } from '../../ProjectSettings';
import type { IconProps } from './IconProps';

export const Icon = JSX<IconProps>(
  ({ className, name, alt = `Icon ${name}`, title = alt, asSVG, ...imgProps }) => {
    const href = `${projectSettings.CDN || ''}icons/${name}.svg`;

    if (asSVG) {
      return (
        <svg className={className} {...imgProps} aria-hidden="true">
          {title ? <title>{title}</title> : null}
          {alt ? <desc>{alt}</desc> : null}
          <use href={`${href}#icon`} xlinkHref={`${href}#icon`} />
        </svg>
      );
    }

    return (
      <img
        className={className}
        src={href}
        alt={alt}
        title={title}
        {...imgProps}
        aria-hidden="true"
      />
    );
  },
);
