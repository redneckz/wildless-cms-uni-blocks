import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { PictureTextContent } from './PictureTextContent';
import { PictureTextInner } from './PictureTextInner';

export interface PictureTextProps extends PictureTextContent, UniBlockProps {}

export const PictureText = JSX<PictureTextProps>((props) => <PictureTextInner {...props} />);
