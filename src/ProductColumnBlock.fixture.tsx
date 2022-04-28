import { ProductColumnBlock } from './ProductColumnBlock';

import './setup-fixture';

export default {
  default: (
    <ProductColumnBlock
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
    />
  ),
  promo: (
    <ProductColumnBlock
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
