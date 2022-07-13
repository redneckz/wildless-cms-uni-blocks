import { context } from '../../setup-fixture';
import type { AccordionProps } from './Accordion';
import type { TextBlockContent } from '../TextBlock/TextBlockContent';
import { Accordion } from './Accordion';
import {
  LinkDocsFixtureSetOne,
  LinkDocsFixtureSetThree,
  LinkDocsFixtureSetTwo,
} from '../LinkDocs/LinkDocs.fixture';

const TEXT_BLOCK: TextBlockContent = {
  title: 'Title',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque minima odio soluta cupiditate pariatur, labore molestias quas necessitatibus nesciunt in praesentium accusamus provident sequi maiores autem. Voluptas quam neque iste?',
  blockVersion: 'secondary-light',
  iconVersion: 'small',
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
  ],
};

const propsLinkDocs: AccordionProps = {
  title: 'Accordion title',
  context,
  accordionItems: [
    {
      label: 'Список документов в 2 колонки',
      blocks: [
        {
          type: 'LinkDocs',
          data: { ...LinkDocsFixtureSetOne, title: '' },
        },
      ],
    },
    {
      label: 'Список документов в одну колонку',
      blocks: [
        {
          type: 'LinkDocs',
          data: { ...LinkDocsFixtureSetTwo, title: '' },
        },
      ],
    },
    {
      label: 'Немного кастомизированный список',
      blocks: [
        {
          type: 'LinkDocs',
          data: LinkDocsFixtureSetThree,
        },
      ],
    },
  ],
};

export default {
  'with text block': <Accordion {...propsTextBlock} />,
  'with link docs block': <Accordion {...propsLinkDocs} />,
};
