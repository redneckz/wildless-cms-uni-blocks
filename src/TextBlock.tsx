import { JSX } from '@redneckz/uni-jsx';
import { Img } from './Img';
import type { Picture } from './model/Picture';
import type { TextBlockContent, TextBlockVersion } from './TextBlockContent';
import type { UniBlockProps } from './types';

export interface TextBlockProps extends TextBlockContent, UniBlockProps {}

const textBlockStyleMaps: Record<
  TextBlockVersion,
  { background: string; icon: string; title: string; description: string }
> = {
  primary: {
    background: 'bg-white',
    icon: 'bg-primary-main text-white',
    title: 'text-base',
    description: 'text-secondary-text',
  },
  secondary: {
    background: 'bg-primary-main',
    icon: 'bg-white text-primary-main',
    title: 'text-white',
    description: 'text-white',
  },
  'secondary-light': {
    background: 'bg-primary-main/10',
    icon: 'bg-primary-main text-white',
    title: 'text-base',
    description: 'text-secondary-text',
  },
};

export const TextBlock = JSX<TextBlockProps>(
  ({ title, description, blockVersion = 'primary', iconVersion, image, className }) => {
    const textBlockStyleMap = textBlockStyleMaps[blockVersion];
    return (
      <section
        className={`font-sans px-9 py-4 flex ${textBlockStyleMap.background} ${className || ''}`}
      >
        {iconVersion && iconVersion === 'small' ? renderIcon(textBlockStyleMap.icon) : null}
        {iconVersion && iconVersion === 'big' ? renderImage(image) : null}
        <div className="py-0.5">
          {title && <div className={`font-medium mb-1 ${textBlockStyleMap.title}`}>{title}</div>}
          {description && (
            <div className={`text-sm ${textBlockStyleMap.description}`}>{description}</div>
          )}
        </div>
      </section>
    );
  },
);

function renderIcon(className: string) {
  return (
    <div className={`pt-1.5 pr-4`}>
      <div className={`rounded-full h-4 w-4 text-center text-xs ${className}`}>i</div>
    </div>
  );
}

function renderImage(image?: Picture) {
  return image?.src ? <Img className="pt-0.5 pr-3" image={image} /> : null;
}
