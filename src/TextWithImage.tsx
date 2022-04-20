import { JSX } from '@redneckz/uni-jsx';
import { Img } from './Img';
import type { Picture } from './types';

export interface TextWithImageContent {
  primary?: string;
  image?: Picture;
}

export interface TextWithImageProps extends TextWithImageContent {
  className?: string;
}

export const TextWithImage = JSX<TextWithImageProps>(
  ({ className, primary, image }) => {
    return (
      <div className={className || ''}>
        {primary && (
          <p className="font-bold text-slate-700 leading-snug">{primary}</p>
        )}
        {image && <Img image={image} />}
      </div>
    );
  }
);
