import { JSX } from '@redneckz/uni-jsx';

import { BaseTile } from '../BaseTile/BaseTile';
import type { HeadlineContent } from './HeadlineBlockContetnt';
import type { UniBlockProps } from '../../types';

export interface HeadlineBlockProps extends UniBlockProps, HeadlineContent {}

export const HeadlineBlock = JSX<HeadlineBlockProps>(({ bgColor, ...props }) => {
  return (
    <section className={`py-10 ${bgColor}`}>
      <BaseTile {...props}></BaseTile>
    </section>
  );
});
