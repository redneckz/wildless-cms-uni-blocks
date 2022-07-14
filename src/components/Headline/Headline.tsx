import { JSX } from '@redneckz/uni-jsx';

import type { UniBlockProps } from '../../types';
import { BaseTile } from '../BaseTile/BaseTile';
import type { HeadlineContent } from './HeadlineContent';

export interface HeadlineProps extends UniBlockProps, HeadlineContent {}

export const Headline = JSX<HeadlineProps>(({ bgColor = 'bg-white', className, ...props }) => {
  return (
    <section className={`p-10 ${bgColor} ${className || ''} `}>
      <BaseTile {...props}></BaseTile>
    </section>
  );
});
