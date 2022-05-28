import { context } from '../setup-fixture';
import { Header } from './Header';

export default (
  <Header
    context={context}
    location="Москва"
    topItems={[
      {
        href: 'https://rshb.ru/',
        text: 'Бизнес клиентам',
        target: '_blank',
      },
      {
        href: 'https://rshb.ru/',
        text: 'Частным клиентам',
        target: '_blank',
      },
    ]}
  />
);
