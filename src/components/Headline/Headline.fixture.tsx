import { context } from '../../setup-fixture';

import { Headline } from './Headline';

export default {
  default: (
    <Headline
      title="Своя кредитная карта"
      description="Карта работает в 180 странах мира. Бесплатное снятие наличных в любых банкоматах."
      align="left"
      bgColor="bg-white"
      context={context}
    />
  ),
  'center transparent': (
    <Headline
      title="Своя кредитная карта"
      description="Карта работает в 180 странах мира. Бесплатное снятие наличных в любых банкоматах."
      align="center"
      bgColor="transparent"
      context={context}
    />
  ),
  'right transparent': (
    <Headline
      title="Своя кредитная карта"
      description="Карта работает в 180 странах мира. Бесплатное снятие наличных в любых банкоматах."
      align="right"
      bgColor="transparent"
      context={context}
    />
  ),
  'right white': (
    <Headline
      title="Своя кредитная карта"
      description="Карта работает в 180 странах мира. Бесплатное снятие наличных в любых банкоматах."
      align="right"
      bgColor="bg-white"
      context={context}
    />
  ),
};
