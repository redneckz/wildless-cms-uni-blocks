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
  default: (
    <div className="container grid grid-cols-12">
      <Headline className="col-span-12" context={context} {...HEADLINE} />
    </div>
  ),
  'left white': (
    <div className="container grid grid-cols-12">
      <Headline
        className="col-span-12"
        context={context}
        {...HEADLINE}
        align="left"
        bgColor="bg-white"
      />
    </div>
  ),
  'right transparent': (
    <div className="container grid grid-cols-12">
      <Headline
        className="col-span-12"
        context={context}
        {...HEADLINE}
        align="right"
        bgColor="transparent"
      />
    </div>
  ),
};
