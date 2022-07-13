import { context } from '../../setup-fixture';
import type { AccordionProps } from './Accordion';
import type { TextBlockContent } from '../TextBlock/TextBlockContent';
import { Accordion } from './Accordion';
import { LinkDocsContent } from '../LinkDocs/LinkDocsContent';

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

const LINKDOCS_BLOCK: LinkDocsContent = {
  title: { text: 'Дополнительные документы' },
  documents: [
    { text: 'target self', href: '/abc1', target: '_self' },
    { text: 'target blank', href: '/abc2', target: '_blank' },
    { text: 'GlassIcon', href: '/abc3', icon: 'GlassIcon' },
    { text: 'no icon', href: '/abc4', showIcon: false },
    { text: 'документ 5', href: '/abc5', ext: 'pdf' },
    { text: 'документ 6', href: '/abc6', ext: 'pdf' },
    { text: 'PDF без отображения формата', href: '/abc7', ext: 'pdf', showExt: false },
    { text: 'расширение и размер', href: '/abc8', ext: 'doc', fileSize: '10 МБ' },
    { text: 'только размер файла', href: '/abc9', ext: 'doc', showExt: false, fileSize: '10 МБ' },
    { text: 'с размером файла', href: '/abc10', fileSize: '2.22МБ' },
  ],
};

const LINKDOCS_ONE_COL_BLOCK: LinkDocsContent = {
  ...LINKDOCS_BLOCK,
  columns: 'single',
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
          data: LINKDOCS_BLOCK,
        },
      ],
    },
    {
      label: 'Список документов в одну колонку',
      blocks: [
        {
          type: 'LinkDocs',
          data: LINKDOCS_ONE_COL_BLOCK,
        },
      ],
    },
  ],
};

export default {
  'with text block': <Accordion {...propsTextBlock} />,
  'with link docs block': <Accordion {...propsLinkDocs} />,
};
