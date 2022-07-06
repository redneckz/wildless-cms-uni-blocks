import type { Picture } from '../../model/Picture';

export type TextBlockVersion = 'primary' | 'secondary' | 'secondary-light';
export type TextBlockIconVersion = 'none' | 'small' | 'big';

export interface TextBlockContent {
  title?: string;
  description?: string;
  blockVersion?: TextBlockVersion;
  iconVersion?: TextBlockIconVersion;
  image?: Picture;
}
