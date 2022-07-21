import { JSX } from '@redneckz/uni-jsx';
import type { ImgSource, Picture } from '../model/Picture';

export interface TextWithImageProps {
  className?: string;
  image: Picture;
}

export const Img = JSX<TextWithImageProps>(({ className, image: { size, ...image } }) => {
  const style = {
    width: size?.width ? `${size?.width}px` : '100%',
    height: size?.height ? `${size?.height}px` : '100%',
  };

  return (
    <picture className={`flex-none ${className || ''}`}>
      {image.sources?.length
        ? image.sources.map(({ src, format }, index) => (
            <source key={`${index}_${src}`} srcSet={src} type={formatToMimeType(format)} />
          ))
        : null}
      <img
        src={image.src}
        alt={image.alt || image.title}
        title={image.title}
        style={style}
        {...size}
      />
    </picture>
  );
});

export function formatToMimeType(format: ImgSource['format']): string | undefined {
  return format ? `image/${String(format)}` : undefined;
}
