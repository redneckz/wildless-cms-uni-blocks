import type { PlaceholderContent } from './Placeholder';
import { Placeholder } from './Placeholder';
import type { TextContent } from './Text';
import { Text } from './Text';

export type BlockContent = PlaceholderContent | TextContent;

export const Blocks = {
  Text,
  Placeholder,
};
