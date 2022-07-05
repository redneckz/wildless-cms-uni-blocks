import { context } from './setup-fixture';
import type { AccordionProps } from './Accordion';
import { Accordion } from './Accordion';

const props: AccordionProps = {
  title: 'Accordion title',
  context,
  items: [
    {
      label: 'Accordion label 1',
      components: [
        {
          name: 'Text',
          data: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae sit labore eum iste ea atque accusantium architecto voluptate voluptates, corporis aperiam! Illo ducimus deserunt totam harum neque obcaecati tempore voluptatibus.',
        },
        {
          name: 'Docs',
          data: [
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
          ],
        },
      ],
    },
    {
      label: 'Accordion label 2',
      components: [
        {
          name: 'Text',
          data: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae sit labore eum iste ea atque accusantium architecto voluptate voluptates, corporis aperiam! Illo ducimus deserunt totam harum neque obcaecati tempore voluptatibus.',
        },
        {
          name: 'Docs',
          data: [
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
          ],
        },
      ],
    },
    {
      label: 'Accordion label 3',
      components: [
        {
          name: 'Text',
          data: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae sit labore eum iste ea atque accusantium architecto voluptate voluptates, corporis aperiam! Illo ducimus deserunt totam harum neque obcaecati tempore voluptatibus.',
        },
        {
          name: 'Docs',
          data: [
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
          ],
        },
      ],
    },
  ],
};
export default <Accordion {...props} />;
