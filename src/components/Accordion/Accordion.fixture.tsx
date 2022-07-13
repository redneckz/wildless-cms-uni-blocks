import { context } from '../../setup-fixture';
import type { AccordionProps } from './Accordion';
import type { TextBlockContent } from '../TextBlock/TextBlockContent';
import type { HeadlineProps } from '../Headline/Headline';
import { Accordion } from './Accordion';
import { Headline } from '../Headline/Headline';

const TEXT_BLOCK: TextBlockContent = {
  title: 'Title',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque minima odio soluta cupiditate pariatur, labore molestias quas necessitatibus nesciunt in praesentium accusamus provident sequi maiores autem. Voluptas quam neque iste?',
  blockVersion: 'secondary-light',
  iconVersion: 'small',
};

const HEADLINE: HeadlineProps = {
  context,
  title: 'Своя кредитная карта',
  description: 'Карта работает в 180 странах мира. Бесплатное снятие наличных в любых банкоматах.',
  align: 'left',
  bgColor: 'bg-white',
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
          type: 'Headline',
          data: HEADLINE,
        },
        {
          type: 'Headline',
          data: HEADLINE,
        },
      ],
    },
  ],
};

export default {
  'with text block': <Accordion {...propsTextBlock} />,
};
