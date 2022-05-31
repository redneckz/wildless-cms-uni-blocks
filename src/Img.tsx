import { JSX } from '@redneckz/uni-jsx';
import type { Picture, ImgSource } from './types';

export interface TextWithImageProps {
  className?: string;
  image: Picture;
}

export const Img = JSX<TextWithImageProps>(({ className, image }) => (
  <picture className={`flex ${className || ''}`}>
    {image.sources?.length
      ? image.sources.map(({ src, format }, index) => (
          <source key={`${index}_${src}`} srcSet={src} type={formatToMimeType(format)} />
        ))
      : null}
    <img
      src={image.src}
      alt={image.alt}
      title={image.title}
      {...image?.size}
      className={`mt-auto w-full`}
    />
  </picture>
));

export function formatToMimeType(format: ImgSource['format']): string | undefined {
  return format ? `image/${String(format)}` : undefined;
}
