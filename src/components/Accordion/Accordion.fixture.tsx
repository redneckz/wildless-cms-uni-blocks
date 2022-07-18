import { context } from '../../setup-fixture';
import { HEADLINE } from '../Headline/Headline.fixture';
import { LINK_DOCS } from '../LinkDocs/LinkDocs.fixture';
import { PICTURE_TEXT } from '../PictureText/PictureText.fixture';
import { TEXT_BLOCK } from '../TextBlock/TextBlock.fixture';
import type { AccordionProps } from './Accordion';
import { Accordion } from './Accordion';
import type {
  HeadlineAccordionBlock,
  LinkDocsAccordionBlock,
  PictureTextAccordionBlock,
  TextBlockAccordionBlock,
} from './AccordionContent';

const TEXT_BLOCK_ACCORDION_BLOCK: TextBlockAccordionBlock = {
  accordionBlockType: 'TextBlock',
  ...TEXT_BLOCK,
};

const HEADLINE_ACCORDION_BLOCK: HeadlineAccordionBlock = {
  accordionBlockType: 'Headline',
  ...HEADLINE,
};

const PICTURE_TEXT_ACCORDION_BLOCK: PictureTextAccordionBlock = {
  accordionBlockType: 'PictureText',
  ...PICTURE_TEXT,
};

const LINK_DOCS_ACCORDION_BLOCK: LinkDocsAccordionBlock = {
  accordionBlockType: 'LinkDocs',
  ...LINK_DOCS,
};

const propsTextBlock: AccordionProps = {
  title: 'Accordion title',
  context,
  accordionItems: [
    {
      label: 'Accordion label 1',
      blocks: [TEXT_BLOCK_ACCORDION_BLOCK, TEXT_BLOCK_ACCORDION_BLOCK],
    },
    {
      label: 'Accordion label 2',
      blocks: [PICTURE_TEXT_ACCORDION_BLOCK],
    },
    {
      label: 'Accordion label 3',
      blocks: [HEADLINE_ACCORDION_BLOCK],
    },
    {
      label: 'Accordion label 4',
      blocks: [LINK_DOCS_ACCORDION_BLOCK],
    },
  ],
};

export default <Accordion {...propsTextBlock} />;
