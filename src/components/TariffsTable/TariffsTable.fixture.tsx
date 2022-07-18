import { context } from '../../setup-fixture';
import { TariffsTable } from './TariffsTable';
import type { Picture } from '../../model/Picture';
import type { TariffsTableColumn, TariffsTableRowHeader } from './TariffsTableContent';

const image: Picture = {
  src: 'payment-systems.png',
  format: 'webp',
  size: {
    width: 288,
    height: 56,
  },
};

const rowHeaders: TariffsTableRowHeader[] = [
  { title: 'Начисление процентов на остаток по счету', icon: 'OkIcon' },
  { title: 'Снятие наличных', icon: 'GlassIcon' },
  { title: 'Оформление онлайн', icon: 'ShieldTickIcon' },
  { title: 'Кэшбэк баллами' },
  { title: 'Стоимость обслуживания' },
  { title: 'Стоимость SMS-сервиса' },
  { title: 'Дополнительная информация' },
];

const columns: TariffsTableColumn[] = [
  {
    data: [
      [{ label: 'Нет' }],
      [
        {
          label: 'Бесплатно',
          description: 'В банкоматах и кассах Россельхозбанка и банков-партнеров',
        },
        {
          label: 'Бесплатно',
          description: 'В сторонних банкоматах - 1 раз в месяц, далее 1% минимум 150 руб',
        },
      ],
      [{ label: 'Нет' }],
      [{ label: 'Платёжные системы картинкой' }, { image: image }],
      [
        { label: 'Кнопки-иконки' },
        {
          buttons: [
            {
              icon: 'AppleIcon',
              rounded: true,
              version: 'secondary',
              href: '/_blank',
              target: '_blank',
            },
            {
              icon: 'PlayMarketIcon',
              rounded: true,
              version: 'secondary',
              href: '/secondary',
            },
          ],
        },
      ],
      [
        {
          label: 'Бесплатно',
          list: {
            items: ['item 1', 'item 2', 'item 3'],
          },
        },
      ],
      [
        {
          image: {
            src: 'money-1.png',
            format: 'webp',
            size: {
              width: 140,
              height: 140,
            },
          },
        },
      ],
    ],
  },
  {
    data: [
      [{ label: 'Нет' }],
      [
        {
          label: 'Бесплатно',
          description: 'В банкоматах и кассах Россельхозбанка и банков-партнеров',
        },
        {
          label: '1%',
          description: 'В сторонних банкоматах, минимум 150 руб',
        },
      ],
      [{ label: 'Нет' }],
      [
        { label: 'До 20%' },
        {
          list: {
            isDotted: false,
            items: ['item 1', 'item 2', 'item 3'],
          },
        },
      ],
      [
        {
          label: 'Бесплатно',
          description: 'При обороте по карте от 10000 ₽ в месяц',
        },
      ],
      [
        { label: '69 рублей в месяц' },
        {
          list: {
            version: 'primary',
            items: ['item 1', 'item 2', 'item 3'],
          },
        },
      ],
      [
        {
          description:
            'Копите баллы каждый день и обменивайте их на скидки на электронику и бытовую технику Panasonic',
        },
      ],
    ],
  },
  {
    data: [
      [{ label: 'Нет' }],
      [{ label: 'Бесплатно' }],
      [{ label: 'Есть' }],
      [{ label: 'До 20%' }],
      [
        {
          label: 'Бесплатно',
          description: 'При обороте по карте от 10000 ₽ в месяц',
        },
      ],
      [{ label: '69 рублей в месяц' }],
      [{ description: 'Для членов профсоюзных организаций' }],
    ],
  },
];

export default {
  default: (
    <div className="w-[1280px]">
      <TariffsTable
        className="col-span-12"
        title="Другие дебетовые карты Россельхозбанка"
        context={context}
        rowHeaders={rowHeaders}
        columns={Array(2).fill(columns).flat()}
      />
    </div>
  ),
  '1 column': (
    <div className="w-[1280px]">
      <TariffsTable
        className="col-span-12"
        title="Другие дебетовые карты Россельхозбанка"
        context={context}
        rowHeaders={rowHeaders}
        columns={columns.slice(0, 1)}
      />
    </div>
  ),
  '2 columns': (
    <div className="w-[1280px]">
      <TariffsTable
        className="col-span-12"
        title="Другие дебетовые карты Россельхозбанка"
        context={context}
        rowHeaders={rowHeaders}
        columns={columns.slice(0, 2)}
      />
    </div>
  ),
  '3 columns': (
    <div className="w-[1280px]">
      <TariffsTable
        className="col-span-12"
        title="Другие дебетовые карты Россельхозбанка"
        context={context}
        rowHeaders={rowHeaders}
        columns={columns.slice(0, 3)}
      />
    </div>
  ),
};
