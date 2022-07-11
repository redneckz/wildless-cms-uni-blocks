import { context } from '../../setup-fixture';
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
      elements: [
        {
          name: 'Docs',
          data: DOCS,
        },
      ],
    },
    {
      label: 'Accordion label 2',
      elements: [
        {
          name: 'Docs',
          data: DOCS,
        },
      ],
    },
    {
      label: 'Accordion label 3',
      elements: [
        {
          name: 'Docs',
          data: DOCS,
        },
      ],
    },
  ],
};

const propsText: AccordionProps = {
  title: 'Accordion title',
  context,
  accordionItems: [
    {
      label: 'Accordion label 1',
      elements: [
        {
          name: 'Text',
          data: TEXT,
        },
      ],
    },
    {
      label: 'Accordion label 2',
      elements: [
        {
          name: 'Text',
          data: TEXT,
        },
      ],
    },
    {
      label: 'Accordion label 3',
      elements: [
        {
          name: 'Text',
          data: TEXT,
        },
      ],
    },
  ],
};

const propsTextAndDocs: AccordionProps = {
  title: 'Accordion title',
  context,
  accordionItems: [
    {
      label: 'Accordion label 1',
      elements: [
        {
          name: 'Text',
          data: TEXT,
        },
        {
          name: 'Docs',
          data: DOCS,
        },
      ],
    },
    {
      label: 'Accordion label 2',
      elements: [
        {
          name: 'Text',
          data: TEXT,
        },
        {
          name: 'Docs',
          data: DOCS,
        },
      ],
    },
    {
      label: 'Accordion label 3',
      elements: [
        {
          name: 'Text',
          data: TEXT,
        },
        {
          name: 'Docs',
          data: DOCS,
        },
      ],
    },
  ],
};
export default {
  'with docs': <Accordion {...propsDocs} />,
  'with text': <Accordion {...propsText} />,
  'with text and docs': <Accordion {...propsTextAndDocs} />,
};
