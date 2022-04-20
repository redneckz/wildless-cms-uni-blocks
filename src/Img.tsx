import { JSX } from '@redneckz/uni-jsx';
import type { Picture, ImgSource } from './types';

export interface TextWithImageProps {
  className?: string;
  image: Picture;
}

export const Img = JSX<TextWithImageProps>(({ className, image }) => (
  <picture className={className || ''}>
    {image.sources &&
      image.sources.map(({ src, format }) => (
        <source key={src} srcSet={src} type={formatToMimeType(format)} />
      ))}
    <img src={image.src} alt={image.alt} title={image.title} />
  </picture>
));

export function formatToMimeType(
  format: ImgSource['format']
): string | undefined {
  return format && `image/${format}`;
}
