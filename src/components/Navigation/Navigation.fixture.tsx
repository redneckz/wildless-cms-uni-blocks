import { context } from '../../setup-fixture';

import { Navigation } from './Navigation';

export default () => (
  <Navigation
    title="Потребительский кредит наличными"
    buttons={[
      {
        href: '/credits',
        text: 'Оформить',
      },
      {
        href: '/tariffs',
        text: 'Тарифы',
      },
      {
        href: '/harvest',
        text: 'Урожай',
      },
      {
        href: '/faq',
        text: 'Частые вопросы',
      },
    ]}
    context={context}
  />
);
