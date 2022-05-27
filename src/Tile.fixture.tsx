import { context } from './setup-fixture';

import { Tile } from './Tile';
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
  credit: (
    <div className={`grid grid-cols-12`}>
      <Tile
        context={context}
        className={'col-span-8 h-[308px]'}
        title={'Кредиты'}
        items={[
          'Кредитный лимит до 10 млн Р',
          'Кредиты наличными на любые цели',
          'Получите деньги без залога и поручителей',
        ]}
        buttons={[
          {
            text: 'Подробнее',
            href: '/credit-cards',
            version: 'secondary',
          },
        ]}
        image={image}
      />
    </div>
  ),
  ipoteka: (
    <div className={`grid grid-cols-12`}>
      <Tile
        context={context}
        version={'secondary'}
        className={'col-span-4 h-[308px]'}
        title={'Ипотека'}
        description={
          'Ши  рокий выбор ипотечных программ с государственной поддержкой. Специальный предложения от 12,2 %'
        }
        buttons={[
          {
            href: 'https://rshb.ru',
            text: 'Подробнее',
            target: '_blank',
            version: 'secondary',
          },
        ]}
      />
    </div>
  ),
  'credit-card': (
    <div className={`grid grid-cols-12`}>
      <Tile
        context={context}
        className={'col-span-6 h-[308px]'}
        title={'Банковские пластиковые карты'}
        items={['Счета в разных валютах', 'Бесплатное обслуживание', 'Кэшбэк до 15% от покупок']}
        buttons={[
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
  premium: (
    <div className={`grid grid-cols-12`}>
      <Tile
        context={context}
        className={'col-span-6 h-[308px]'}
        title={'Премиальные продукты'}
        description={
          'Выделенные зоны обслуживания и персональный финансовый консультант. Полный спектр премиальных продуктов, подчеркивающих ваш статус'
        }
        buttons={[
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
  ecosystem: (
    <div className={`grid grid-cols-12`}>
      <Tile
        context={context}
        className={'col-span-12 h-[308px]'}
        title={'Экосистема «СВОЕ», созданная для людей'}
        items={[
          'Качественные фермерские продукты напрямую от производителей',
          'Самая большая база сельских туров по России',
          'Площадки для создания комфортной жизни за городом',
          'Подробная база вакансий для жителей сельской местности',
        ]}
        buttons={[
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
  'drag-metall': (
    <div className={`grid grid-cols-12`}>
      <Tile
        context={context}
        version={'secondary'}
        className={'col-span-4 h-[308px]'}
        title={'Драгоценные металлы'}
        items={['Счета в драгоценных металлах', 'Слитки  и монеты из драгоценных металлов']}
        buttons={[
          {
            href: 'https://rshb.ru',
            text: 'Подробнее',
            target: '_blank',
            version: 'secondary',
          },
        ]}
      />
    </div>
  ),
  'bank-cell': (
    <div className={`grid grid-cols-12`}>
      <Tile
        context={context}
        version={'secondary'}
        className={'col-span-4 h-[308px]'}
        title={'Банковские ячейки'}
        items={['Полная конфиденциальность', 'Разный размер ячеек', 'Оформление доверенностей']}
        buttons={[
          {
            href: 'https://rshb.ru',
            text: 'Подробнее',
            target: '_blank',
            version: 'secondary',
          },
        ]}
      />
    </div>
  ),
  deposit: (
    <div className={`grid grid-cols-12`}>
      <Tile
        context={context}
        version={'secondary'}
        className={'col-span-4 h-[308px]'}
        title={'Вклады и сбережения'}
        items={[
          'Доходность по вкладам  до 15% годовых',
          'Минимальная сумма вклада  от 3000 Р',
          'Минимальный срок вклада от 1 месяца',
        ]}
        buttons={[
          {
            href: 'https://rshb.ru',
            text: 'Подробнее',
            target: '_blank',
            version: 'secondary',
          },
        ]}
      />
    </div>
  ),
};
