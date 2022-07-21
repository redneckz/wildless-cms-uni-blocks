import { context } from '../../setup-fixture';

import type { Picture } from '../../model/Picture';
import { ProductBlock } from './ProductBlock';

const image: Picture = {
  src: 'money-1.png',
  format: 'webp',
  alt: 'Потребительский кредит наличными',
  size: {
    width: 280,
    height: 280,
  },
};

export default {
  default: (
    <div className="container grid grid-cols-12">
      <ProductBlock
        className="col-span-12"
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
            version: 'primary',
          },
          {
            href: 'https://rshb.ru',
            text: 'Подробнее',
            target: '_blank',
            version: 'secondary',
          },
        ]}
        image={image}
      />
    </div>
  ),
  secondary: (
    <div className="container grid grid-cols-12">
      <ProductBlock
        context={context}
        className="col-span-12"
        title={'Потребительский кредит наличными'}
        version={'secondary'}
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
            href: '#',
          },
        ]}
        benefits={[
          {
            label: 'До 5 млн ₽',
            description: 'Кредитный лимит',
            icon: 'EmptyWalletWhiteIcon',
          },
          {
            label: 'От 16,9%',
            description: 'Ставка по кредиту',
            icon: 'PercentageSquareWhiteIcon',
          },
          {
            label: 'До 5 лет',
            description: 'Срок кредитования',
            icon: 'CalendarWhiteIcon',
          },
        ]}
        buttons={[
          {
            href: 'https://rshb.ru',
            text: 'Оформить карту',
            target: '_blank',
            version: 'secondary',
          },
          {
            href: 'https://rshb.ru',
            text: 'Подробнее',
            target: '_blank',
            version: 'primary',
          },
        ]}
        image={image}
      />
    </div>
  ),
  'with items': (
    <div className="container grid grid-cols-12">
      <ProductBlock
        className="col-span-12"
        context={context}
        title={'Оплата проходит \nв 180 странах мира'}
        breadcrumbs={[]}
        description="Кредит наличными без залога и поручительства. Потребительский кредит на любые цели. Нужен только паспорт."
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
            version: 'primary',
          },
          {
            href: 'https://rshb.ru',
            text: 'Подробнее',
            target: '_blank',
            version: 'secondary',
          },
        ]}
        image={image}
      />
    </div>
  ),
};
