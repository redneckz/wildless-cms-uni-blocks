import type { PlaceholderContent } from './Placeholder';
import { Placeholder } from './Placeholder';
import type { RichTextContent } from './RichText';
import { RichText } from './RichText';
import type { TextContent } from './Text';
import { Text } from './Text';
import type { TextWithImageContent } from './TextWithImage';
import { TextWithImage } from './TextWithImage';

export type BlockContent =
  | TextContent
  | TextWithImageContent
  | RichTextContent
  | PlaceholderContent;

export const Blocks = {
  Text,
  TextWithImage,
  RichText,
  Placeholder,
};
