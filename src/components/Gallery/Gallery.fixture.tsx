import { context } from '../../setup-fixture';

import { Gallery, GalleryProps } from './Gallery';
import { Gallery as MobileGallery } from './Gallery.mobile';
import type { Picture } from '../../model/Picture';
import { ButtonCommonProps } from '../../ui-kit/Button/Button';

const image: Picture = {
  src: 'money-1.png',
  format: 'webp',
  size: {
    width: 140,
    height: 140,
  },
  title: 'money',
};

const buttonPrimary: ButtonCommonProps = {
  href: '/credit-cards',
  text: 'Подробнее',
  target: '_blank',
  version: 'secondary',
};

const buttonSecondary: ButtonCommonProps = {
  href: '/credit-cards',
  text: 'Подробнее',
  target: '_blank',
  version: 'secondary',
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
      button: buttonPrimary,
      items: defaultItems,
    },
    {
      title: 'Более 1000 развлечений',
      description: 'Порядок и условия предоставления в соответствии с 106 ФЗ',
      image,
      button: buttonPrimary,
      items: defaultItems,
    },
    {
      title: 'Фермерские продукты',
      description: 'Высокий процент даже при небольшой сумме денежных средств',
      image,
      button: buttonPrimary,
      items: defaultItems,
    },
    {
      title: '«Моя выгода»',
      description:
        'Время копить: ставка растет в зависимости от срока нахождения средств на Счете!',
      image,
      button: buttonPrimary,
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
      button: buttonPrimary,
    },
    {
      title: 'Более 1000 развлечений',
      description: 'Порядок и условия предоставления в соответствии с 106 ФЗ',
      image,
      button: buttonPrimary,
    },
    {
      title: 'Фермерские продукты',
      description: 'Высокий процент даже при небольшой сумме денежных средств',
      image,
      button: buttonPrimary,
    },
    {
      title: '«Моя выгода»',
      description:
        'Время копить: ставка растет в зависимости от срока нахождения средств на Счете!',
      image,
      button: buttonPrimary,
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
      button: buttonPrimary,
      items: defaultItems,
    },
    {
      title: 'Более 1000 развлечений',
      image,
      button: buttonPrimary,
      items: defaultItems,
    },
    {
      title: 'Фермерские продукты',
      image,
      button: buttonPrimary,
      items: defaultItems,
    },
    {
      title: '«Моя выгода»',
      image,
      button: buttonPrimary,
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
  ],
};

const secondaryColorProps: GalleryProps = {
  title: 'Вы можете оплатить бонусными баллами',
  description: 'Удобный каталог с большим ассортиментом товаров и сервисов',
  context,
  cards: [
    {
      title: 'Более 5000 товаров',
      description:
        'Время копить: ставка растет в зависимости от срока нахождения средств на Счете!',
      image,
      button: buttonSecondary,
      items: defaultItems,
      version: 'secondary',
    },
    {
      title: 'Более 1000 развлечений',
      description: 'Порядок и условия предоставления в соответствии с 106 ФЗ',
      image,
      button: buttonSecondary,
      items: defaultItems,
      version: 'secondary',
    },
    {
      title: 'Фермерские продукты',
      description: 'Высокий процент даже при небольшой сумме денежных средств',
      image,
      button: buttonSecondary,
      items: defaultItems,
      version: 'secondary',
    },
    {
      title: '«Моя выгода»',
      description:
        'Время копить: ставка растет в зависимости от срока нахождения средств на Счете!',
      image,
      button: buttonSecondary,
      items: defaultItems,
      version: 'secondary',
    },
  ],
};

export default {
  default: <Gallery {...defaultProps} />,
  'text and button': <Gallery {...textAndButtonProps} />,
  'list and button': <Gallery {...listAndButtonProps} />,
  'text and no button': <Gallery {...textAndNoButtonProps} />,
  'only title': <Gallery {...onlyTitleProps} />,
  'secondary color': <Gallery {...secondaryColorProps} />,
  mobile: <MobileGallery {...defaultProps} />,
};
