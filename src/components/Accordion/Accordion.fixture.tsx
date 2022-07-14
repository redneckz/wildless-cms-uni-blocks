import { context } from '../../setup-fixture';
import type { HeadlineProps } from '../Headline/Headline';
import type { PictureTextContent } from '../PictureText/PictureTextContent';
import type { TextBlockContent } from '../TextBlock/TextBlockContent';
import type { AccordionProps } from './Accordion';

import { Accordion } from './Accordion';

const TEXT_BLOCK: TextBlockContent = {
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque minima odio soluta cupiditate pariatur, labore molestias quas necessitatibus nesciunt in praesentium accusamus provident sequi maiores autem. Voluptas quam neque iste?',
};

const HEADLINE: HeadlineProps = {
  context,
  title: 'Своя кредитная карта',
  description: 'Карта работает в 180 странах мира. Бесплатное снятие наличных в любых банкоматах.',
  align: 'left',
  bgColor: 'bg-white',
};

const PICTURE_TEXT: PictureTextContent = {
  title: 'Варианты потребительского кредита',
  benefits: [
    {
      label: 'Кредит по одному документу',
      description: 'До 300 тыс ₽ по упрощённой процедуре получения кредита',
      icon: 'DocumentText',
    },
    {
      label: 'Кредит на общих условиях',
      description: 'До 5 млн ₽ на общих условиях получения кредита',
      icon: 'DiscountShape',
    },
  ],
  image: {
    src: 'legal-support-business.png',
    alt: 'Варианты потребительского кредита',
    format: 'webp',
    size: {
      width: 200,
      height: 200,
    },
  },
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
          type: 'PictureText',
          data: PICTURE_TEXT,
        },
        {
          type: 'PictureText',
          data: PICTURE_TEXT,
        },
      ],
    },
    {
      label: 'Accordion label 4',
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
