import { JSX } from '@redneckz/uni-jsx';

import type { UniBlockProps } from '../../types';
import { Title } from '../../ui-kit/Title/Title';
import type { HeadlineContent } from './HeadlineContent';
import { AlignType } from '../BaseTile/BaseTileProps';

export interface HeadlineProps extends UniBlockProps, HeadlineContent {}

const alignText: Record<AlignType, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

export const Headline = JSX<HeadlineProps>(
  ({ bgColor = 'transparent', align = 'left', className, title, description }) => {
    const textClasses = alignText[align];
    return (
      <section className={`p-[50px] ${bgColor} ${className || ''} `}>
        {title && (
          <Title size="L" className={`text-primary-text mt-0 font-medium ${textClasses}`}>
            {title}
          </Title>
        )}
        {description && (
          <p className={`font-normal text-base mt-4 ${textClasses}`}>{description}</p>
        )}
      </section>
    );
  },
);
