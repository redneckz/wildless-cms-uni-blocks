import { JSX } from '@redneckz/uni-jsx';

import type { UniBlockProps } from '../../types';
import { Title } from '../../ui-kit/Title/Title';
import type { HeadlineContent } from './HeadlineContent';
import { Img } from '../../ui-kit/Img';

export interface HeadlineProps extends UniBlockProps, HeadlineContent {}

export const Headline = JSX<HeadlineProps>(
  ({ bgColor = 'transparent', className, title, description, image }) => {
    return (
      <section className={`px-4 py-6 ${bgColor} ${className || ''} `}>
        {title && (
          <Title size="XS" className={`text-primary-text mt-0 font-medium`}>
            {title}
          </Title>
        )}
        {description && (
          <p className={`font-normal text-mini ${title ? 'mt-2.5' : ''}`}>{description}</p>
        )}
        {image?.src && (
          <div className="mt-5 mx-auto max-w-[180px]">
            <Img image={image} />
          </div>
        )}
      </section>
    );
  },
);
