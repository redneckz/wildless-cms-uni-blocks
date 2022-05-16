import { context } from './setup-fixture';

import { ProductColumnBlock } from './ProductColumnBlock';

export default {
  default: (
    <ProductColumnBlock
      context={context}
      title="Кредит на всё, что хочется!"
      items={[
        'Совершайте любые личные покупки',
        'Используйте корпоративную карту как обычную дебетовую, если вы ИП',
        'Расходы для бизнеса на УСН 15% позволят снизить налоговую базу',
      ]}
      button={{
        text: 'Подробнее',
        href: '/foo-page',
      }}
    />
  ),
  promo: (
    <ProductColumnBlock
      context={context}
      title="Кредит на всё, что хочется!"
      items={[
        'Совершайте любые личные покупки',
        'Используйте корпоративную карту как обычную дебетовую, если вы ИП',
        'Расходы для бизнеса на УСН 15% позволят снизить налоговую базу',
      ]}
      button={{
        text: 'Подробнее',
        href: 'https://rshb.ru',
        target: '_blank',
      }}
      promo={true}
    />
  ),
};
