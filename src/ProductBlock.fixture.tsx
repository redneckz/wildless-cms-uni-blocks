import { context } from './setup-fixture';

import { ProductBlock } from './ProductBlock';
import { Picture } from './types';

const image: Picture = {
  src: 'money-1.png',
  format: 'webp',
  size: {
    width: 300,
    height: 300,
  },
};

export default {
  default: (
    <ProductBlock
      context={context}
      title={'Потребительский кредит наличными'}
      description="Кредит наличными без залога и поручительства. Потребительский кредит на любые цели. Нужен только паспорт."
      breadcrumbs={[
        {
          text: 'Главная',
          href: '/',
        },
        {
          text: 'Кредитные карты',
          href: '/credit',
        },
        {
          text: 'Кредитная карта Своя Union Pay',
        },
      ]}
      benefits={[
        {
          label: 'До 5 млн ₽',
          description: 'Кредитный лимит',
          icon: 'EmptyWalletIcon',
        },
        {
          label: 'От 16,9%',
          description: 'Ставка по кредиту',
          icon: 'PercentageSquareIcon',
        },
        {
          label: 'До 5 лет',
          description: 'Срок кредитования',
          icon: 'CalendarIcon',
        },
      ]}
      buttons={[
        {
          href: 'https://rshb.ru',
          text: 'Оформить карту',
          target: '_blank',
          variant: 'primary',
        },
        {
          href: 'https://rshb.ru',
          text: 'Подробнее',
          target: '_blank',
          variant: 'secondary',
        },
      ]}
      image={image}
    />
  ),
  'with items': (
    <ProductBlock
      context={context}
      title={'Оплата проходит \nв 180 странах мира'}
      breadcrumbs={[]}
      items={[
        'Совершайте любые личные покупки',
        'Используйте корпоративную карту как обычную дебетовую, если вы ИП',
        'Расходы для бизнеса на УСН 15% позволят снизить налоговую базу',
      ]}
      buttons={[
        {
          href: 'https://rshb.ru',
          text: 'Оформить карту',
          target: '_blank',
          variant: 'primary',
        },
        {
          href: 'https://rshb.ru',
          text: 'Подробнее',
          target: '_blank',
          variant: 'secondary',
        },
      ]}
      image={image}
    />
  ),
};
