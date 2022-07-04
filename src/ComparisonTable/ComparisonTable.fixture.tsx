import { context } from '../setup-fixture';
import { ComparisonTable } from './ComparisonTable';
import type { Picture } from '../types';
import type { Column } from './ComparisonTableContent';

const image1: Picture = {
  src: 'card-1.png',
  format: 'webp',
  size: {
    width: 100,
    height: 63,
  },
};

const image2: Picture = {
  src: 'card-2.png',
  format: 'webp',
  size: {
    width: 100,
    height: 63,
  },
};

const image3: Picture = {
  src: 'card-3.png',
  format: 'webp',
  size: {
    width: 100,
    height: 63,
  },
};

const rowHeaders = [
  { title: 'Начисление процентов на остаток по счету' },
  { title: 'Снятие наличных' },
  { title: 'Оформление онлайн' },
  { title: 'Кэшбэк баллами' },
  { title: 'Стоимость обслуживания' },
  { title: 'Стоимость SMS-сервиса' },
  { title: 'Дополнительная информация' },
];
const rowHeaders2 = [
  { title: 'Срок вклада (дней)' },
  { title: 'Ставка по вкладу' },
  { title: 'Минимальная сумма' },
  { title: 'Максимальная сумма' },
];
const columns: Column[] = [
  {
    header: {
      title: 'Россельхоз-Росснефть',
      image: image1,
      link: {
        text: 'Подробнее',
        href: '/credits',
      },
    },
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
      [{ label: 'До 7%' }],
      [
        {
          label: 'Бесплатно',
          description: 'При обороте по карте от 10000 ₽ в месяц',
        },
      ],
      [{ label: '69 рублей в месяц' }],
      [{ description: 'Оплачивайте покупки картой и заправляйтесь за баллы в сети АЗС Роснефть' }],
    ],
  },
  {
    header: {
      title: 'Panasonic',
      image: image2,
      link: {
        text: 'Подробнее',
        href: '/credits',
      },
    },
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
      [{ label: 'До 20%' }],
      [
        {
          label: 'Бесплатно',
          description: 'При обороте по карте от 10000 ₽ в месяц',
        },
      ],
      [{ label: '69 рублей в месяц' }],
      [
        {
          description:
            'Копите баллы каждый день и обменивайте их на скидки на электронику и бытовую технику Panasonic',
        },
      ],
    ],
  },
  {
    header: {
      title: 'Профсоюзная',
      image: image3,
      link: {
        text: 'Подробнее',
        href: '/credits',
      },
    },
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
const columns2: Column[] = [
  {
    header: {
      title: '«Пополняемый»',
      icon: 'GlassIcon',
      link: {
        text: 'Подробнее',
        href: '/credits',
      },
    },
    data: [
      [{ label: 'от 91 до 1095' }],
      [{ label: 'до 8,2% ₽' }, { label: 'до 0,01% USD' }],
      [{ label: 'От 3000 ₽' }, { label: 'От 50 USD' }],
      [{ label: 'до 10 млн ₽' }, { label: 'до 300 тыс. USD' }],
    ],
  },
  {
    header: {
      title: '«Комфортный»',
      icon: 'ComfortableCompIcon',
      link: {
        text: 'Подробнее',
        href: '/credits',
      },
    },
    data: [
      [{ label: 'от 91 до 1095' }],
      [{ label: 'до 7,2% ₽' }, { label: 'до 0,01% USD' }],
      [{ label: 'От 10 000 ₽' }, { label: 'От 150 USD' }],
      [{ label: 'до 10 млн ₽' }, { label: 'до 300 тыс. USD' }],
    ],
  },
  {
    header: {
      title: '«Доходный пенсионный»',
      icon: 'ClockIcon',
      link: {
        text: 'Подробнее',
        href: '/credits',
      },
    },
    data: [
      [{ label: 'от 91 до 1460' }],
      [{ label: 'до 9,5% ₽' }],
      [{ label: 'От 500 ₽' }],
      [{ label: 'Без ограничений' }],
    ],
  },
];

export default {
  'with images': (
    <div className="w-[1280px]">
      <div className="grid grid-cols-12">
        <ComparisonTable
          className="col-span-12"
          title="Другие дебетовые карты Россельхозбанка"
          context={context}
          rowHeaders={rowHeaders}
          columns={Array(2).fill(columns).flat()}
        />
      </div>
    </div>
  ),
  'with images and hidden rows': (
    <div className="w-[1280px]">
      <div className="grid grid-cols-12">
        <ComparisonTable
          className="col-span-12"
          title="Другие дебетовые карты Россельхозбанка"
          visibleRowLength={3}
          context={context}
          rowHeaders={rowHeaders}
          columns={Array(2).fill(columns).flat()}
        />
      </div>
    </div>
  ),
  'with images and colored first column': (
    <div className="w-[1280px]">
      <div className="grid grid-cols-12">
        <ComparisonTable
          className="col-span-12"
          title="Другие дебетовые карты Россельхозбанка"
          visibleRowLength={3}
          isColoredFirstColumn={true}
          context={context}
          rowHeaders={rowHeaders}
          columns={Array(2).fill(columns).flat()}
        />
      </div>
    </div>
  ),
  'with icons': (
    <div className="w-[1280px]">
      <div className="grid grid-cols-12">
        <ComparisonTable
          className="col-span-12"
          title="Другие вклады и сбережения"
          context={context}
          rowHeaders={rowHeaders2}
          columns={Array(2).fill(columns2).flat()}
        />
      </div>
    </div>
  ),
  'with icons and two cols': (
    <div className="w-[1280px]">
      <div className="grid grid-cols-12">
        <ComparisonTable
          className="col-span-12"
          title="Другие вклады и сбережения"
          context={context}
          rowHeaders={rowHeaders2}
          columns={columns2.slice(0, 2)}
        />
      </div>
    </div>
  ),
};
