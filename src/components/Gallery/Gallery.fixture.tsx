import { context } from '../../setup-fixture';

import { Gallery, GalleryProps } from './Gallery';
import { Gallery as MobileGallery } from './Gallery.mobile';
import type { Picture } from '../../model/Picture';

const image: Picture = {
  src: 'money-1.png',
  format: 'webp',
  size: {
    width: 140,
    height: 140,
  },
};

const defaultItems = [
  'Качественные фермерские продукты напрямую от производителей',
  'Самая большая база сельских туров по России',
  'Площадки для создания комфортной жизни за городом',
];

const defaultProps: GalleryProps = {
  title: 'Вы можете оплатить бонусными баллами',
  description: 'Удобный каталог с большим ассортиментом товаров и сервисов',
  context,
  cards: [
    {
      title: 'Более 5000 товаров',
      description:
        'Время копить: ставка растет в зависимости от срока нахождения средств на Счете!',
      image,
      href: '/credit-cards',
      items: defaultItems,
    },
    {
      title: 'Более 1000 развлечений',
      description: 'Порядок и условия предоставления в соответствии с 106 ФЗ',
      image,
      href: '/credit-cards',
      items: defaultItems,
    },
    {
      title: 'Фермерские продукты',
      description: 'Высокий процент даже при небольшой сумме денежных средств',
      image,
      href: '/credit-cards',
      items: defaultItems,
    },
    {
      title: '«Моя выгода»',
      description:
        'Время копить: ставка растет в зависимости от срока нахождения средств на Счете!',
      image,
      href: '/credit-cards',
      items: defaultItems,
    },
    {
      title: 'Фермерские продукты',
      description: 'Высокий процент даже при небольшой сумме денежных средств',
      image,
      href: '/credit-cards',
      items: defaultItems,
    },
  ],
};

const textAndButtonProps: GalleryProps = {
  title: 'Вы можете оплатить бонусными баллами',
  description: 'Удобный каталог с большим ассортиментом товаров и сервисов',
  context,
  cards: [
    {
      title: 'Более 5000 товаров',
      description:
        'Время копить: ставка растет в зависимости от срока нахождения средств на Счете!',
      image,
      href: '/credit-cards',
    },
    {
      title: 'Более 1000 развлечений',
      description: 'Порядок и условия предоставления в соответствии с 106 ФЗ',
      image,
      href: '/credit-cards',
    },
    {
      title: 'Фермерские продукты',
      description: 'Высокий процент даже при небольшой сумме денежных средств',
      image,
      href: '/credit-cards',
    },
    {
      title: '«Моя выгода»',
      description:
        'Время копить: ставка растет в зависимости от срока нахождения средств на Счете!',
      image,
      href: '/credit-cards',
    },
    {
      title: 'Фермерские продукты',
      description: 'Высокий процент даже при небольшой сумме денежных средств',
      image,
      href: '/credit-cards',
    },
  ],
};

const listAndButtonProps: GalleryProps = {
  title: 'Вы можете оплатить бонусными баллами',
  description: 'Удобный каталог с большим ассортиментом товаров и сервисов',
  context,
  cards: [
    {
      title: 'Более 5000 товаров',
      image,
      href: '/credit-cards',
      items: defaultItems,
    },
    {
      title: 'Более 1000 развлечений',
      image,
      href: '/credit-cards',
      items: defaultItems,
    },
    {
      title: 'Фермерские продукты',
      image,
      href: '/credit-cards',
      items: defaultItems,
    },
    {
      title: '«Моя выгода»',
      image,
      href: '/credit-cards',
      items: defaultItems,
    },
    {
      title: 'Фермерские продукты',
      image,
      href: '/credit-cards',
      items: defaultItems,
    },
  ],
};

const textAndNoButtonProps: GalleryProps = {
  title: 'Вы можете оплатить бонусными баллами',
  description: 'Удобный каталог с большим ассортиментом товаров и сервисов',
  context,
  cards: [
    {
      title: 'Более 5000 товаров',
      description:
        'Время копить: ставка растет в зависимости от срока нахождения средств на Счете!',
      image,
    },
    {
      title: 'Более 1000 развлечений',
      description: 'Порядок и условия предоставления в соответствии с 106 ФЗ',
      image,
    },
    {
      title: 'Фермерские продукты',
      description: 'Высокий процент даже при небольшой сумме денежных средств',
      image,
    },
    {
      title: '«Моя выгода»',
      description:
        'Время копить: ставка растет в зависимости от срока нахождения средств на Счете!',
      image,
    },
    {
      title: 'Фермерские продукты',
      description: 'Высокий процент даже при небольшой сумме денежных средств',
      image,
    },
  ],
};

const onlyTitleProps: GalleryProps = {
  title: 'Вы можете оплатить бонусными баллами',
  description: 'Удобный каталог с большим ассортиментом товаров и сервисов',
  context,
  cards: [
    {
      title: 'Более 5000 товаров',
      image,
    },
    {
      title: 'Более 1000 развлечений',
      image,
    },
    {
      title: 'Фермерские продукты',
      image,
    },
    {
      title: '«Моя выгода»',
      image,
    },
    {
      title: 'Фермерские продукты',
      image,
    },
  ],
};

export default {
  default: <Gallery {...defaultProps} />,
  'text and button': <Gallery {...textAndButtonProps} />,
  'list and button': <Gallery {...listAndButtonProps} />,
  'text and no button': <Gallery {...textAndNoButtonProps} />,
  'only title': <Gallery {...onlyTitleProps} />,
  mobile: <MobileGallery {...defaultProps} />,
};
