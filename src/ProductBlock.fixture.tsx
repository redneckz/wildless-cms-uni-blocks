import { context } from './setup-fixture';

import { ProductBlock } from './ProductBlock';
import { Picture } from './types';

const image: Picture = {
  src: 'worker.png',
};

export default {
  default: (
    <ProductBlock
      context={context}
      title={'Оплата проходит \nв 180 странах мира'}
      description="Онлайн-платформа, объединяющая современные решения для фермеров: продажа и покупка товаров, модернизация вашего бизнеса, поиск сотрудников, льготное финансирование"
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
          label: 'До 15% кешбек',
          description: 'От покупок в любимой категории',
          icon: 'SafeIcon',
        },
        {
          label: 'До 15% кешбек',
          description: 'Кредитный лимит карты',
          icon: 'MoneyIcon',
        },
        {
          label: 'До 15% кешбек',
          description: 'Льготный период кредитования',
          icon: 'CalendarIcon',
        },
      ]}
      button={{
        target: '_self',
        href: '/foo-page',
        text: 'Оформить карту',
      }}
      image={image}
    />
  ),
  'with items': (
    <ProductBlock
      context={context}
      title={'Оплата проходит \nв 180 странах мира'}
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
      items={[
        'Совершайте любые личные покупки',
        'Используйте корпоративную карту как обычную дебетовую, если вы ИП',
        'Расходы для бизнеса на УСН 15% позволят снизить налоговую базу',
      ]}
      button={{
        href: 'https://rshb.ru',
        text: 'Оформить карту',
        target: '_blank',
      }}
      image={image}
    />
  ),
};
