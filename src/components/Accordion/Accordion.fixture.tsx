import { context } from '../../setup-fixture';
import type { TextBlockContent } from '../TextBlock/TextBlockContent';
import type { AccordionProps } from './Accordion';
import { Accordion } from './Accordion';

const TEXT_BLOCK: TextBlockContent = {
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque minima odio soluta cupiditate pariatur, labore molestias quas necessitatibus nesciunt in praesentium accusamus provident sequi maiores autem. Voluptas quam neque iste?',
};

const propsTextBlock: AccordionProps = {
  title: 'Accordion title',
  context,
  accordionItems: [
    {
      label: 'Accordion label 1',
      blocks: [
        {
          type: 'TextBlock',
          data: TEXT_BLOCK,
        },
      ],
    },
    {
      label: 'Accordion label 2',
      blocks: [
        {
          type: 'TextBlock',
          data: TEXT_BLOCK,
        },
      ],
    },
    {
      label: 'Accordion label 3',
      blocks: [
        {
          type: 'TextBlock',
          data: TEXT_BLOCK,
        },
      ],
    },
  ],
};

export default {
  'with text block': <Accordion {...propsTextBlock} />,
};
