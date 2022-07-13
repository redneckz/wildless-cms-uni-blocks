import { TextBlock } from '../TextBlock/TextBlock';
import { LinkDocs } from '../LinkDocs/LinkDocs';
import type { TextBlockContent } from '../TextBlock/TextBlockContent';
import type { LinkDocsContent } from '../LinkDocs/LinkDocsContent';

const AccordionBlocks = {
  TextBlock,
  LinkDocs,
};

export type AccordionBlocksType = TextBlockContent | LinkDocsContent;

export default AccordionBlocks;
