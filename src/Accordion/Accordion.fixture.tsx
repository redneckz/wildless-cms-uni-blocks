import { context } from '../setup-fixture';
import type { AccordionProps } from './Accordion';
import { Accordion } from './Accordion';

const DOCS = [
  {
    href: 'path-to-file.pdf',
    text: 'doc text',
  },
  {
    href: 'path-to-file.pdf',
    text: 'doc text',
    target: '_blank',
  },
  {
    href: 'path-to-file.pdf',
    text: 'doc text',
    target: '_blank',
  },
];

const TEXT =
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae sit labore eum iste ea atque accusantium architecto voluptate voluptates, corporis aperiam! Illo ducimus deserunt totam harum neque obcaecati tempore voluptatibus';

const propsDocs: AccordionProps = {
  title: 'Accordion title',
  context,
  accordionItems: [
    {
      label: 'Accordion label 1',
      docs: DOCS,
    },
    {
      label: 'Accordion label 2',
      docs: DOCS,
    },
    {
      label: 'Accordion label 3',
      docs: DOCS,
    },
  ],
};

const propsText: AccordionProps = {
  title: 'Accordion title',
  context,
  accordionItems: [
    {
      label: 'Accordion label 1',
      text: TEXT,
    },
    {
      label: 'Accordion label 2',
      text: TEXT,
    },
    {
      label: 'Accordion label 3',
      text: TEXT,
    },
  ],
};

const propsTextAndDocs: AccordionProps = {
  title: 'Accordion title',
  context,
  accordionItems: [
    {
      label: 'Accordion label 1',
      text: TEXT,
    },
    {
      label: 'Accordion label 2',
      text: TEXT,
      docs: DOCS,
    },
    {
      label: 'Accordion label 3',
      docs: DOCS,
    },
  ],
};
export default {
  'with docs': <Accordion {...propsDocs} />,
  'with text': <Accordion {...propsText} />,
  'with text and docs': <Accordion {...propsTextAndDocs} />,
};
