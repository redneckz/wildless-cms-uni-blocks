import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../types';
import type { FooterContent } from './Footer';
import { TextInformation } from './TextInformation';

export interface FooterProps extends FooterContent, UniBlockProps {}

export const Footer = JSX<FooterProps>(({ className, context }) => (
  <footer className={`${className} px-9 py-2 bg-white rounded-bl-3xl rounded-br-3xl`}>
    <TextInformation context={context} />
  </footer>
));
