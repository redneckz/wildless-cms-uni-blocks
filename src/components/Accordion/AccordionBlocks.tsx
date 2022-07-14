import { TextBlock } from '../TextBlock/TextBlock';
import { Headline } from '../Headline/Headline';
import { LinkDocs } from '../LinkDocs/LinkDocs';
import type { TextBlockContent } from '../TextBlock/TextBlockContent';
import type { LinkDocsContent } from '../LinkDocs/LinkDocsContent';
import type { HeadlineContent } from '../Headline/HeadlineContent';

const AccordionBlocks = {
  Headline,
  LinkDocs,
  TextBlock,
};

export type AccordionBlocksType = HeadlineContent | TextBlockContent | LinkDocsContent;

export default AccordionBlocks;
