import { JSX } from '@redneckz/uni-jsx';

import type { HeadlineContent } from './HeadlineBlockContetnt';
import { BaseTile } from '../BaseTile/BaseTile';
import { UniBlockProps } from '../../types';

export interface HeadlineBlockProps extends UniBlockProps, HeadlineContent {}

export const HeadlineBlock = JSX<HeadlineBlockProps>(({ bgColor, ...props }) => {
  return (
    <section className={`font-sans font-medium py-10 ${bgColor}`}>
      <BaseTile {...props}></BaseTile>
    </section>
  );
});
