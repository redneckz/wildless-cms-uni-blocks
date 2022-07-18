import { context } from '../../setup-fixture';

import { Headline } from './Headline';
import { HeadlineContent } from './HeadlineContent';

export const HEADLINE: HeadlineContent = {
  title: 'Своя кредитная карта',
  description: 'Карта работает в 180 странах мира. Бесплатное снятие наличных в любых банкоматах.',
  align: 'center',
  bgColor: 'transparent',
};

export default {
  default: <Headline context={context} {...HEADLINE} />,
  'left white': <Headline context={context} {...HEADLINE} align="left" bgColor="bg-white" />,
  'right transparent': (
    <Headline context={context} {...HEADLINE} align="right" bgColor="transparent" />
  ),
};
