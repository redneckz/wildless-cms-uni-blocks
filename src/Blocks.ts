import type { PlaceholderContent } from './Placeholder';
import { Placeholder } from './Placeholder';
import type { RichTextContent } from './RichText';
import { RichText } from './RichText';
import type { TextContent } from './Text';
import { Text } from './Text';

export type BlockContent = PlaceholderContent | TextContent | RichTextContent;

export const Blocks = {
  Text,
  RichText,
  Placeholder,
};
