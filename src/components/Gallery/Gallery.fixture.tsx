import type { Picture } from '../../model/Picture';
import { context } from '../../setup-fixture';
import type { ButtonCommonProps } from '../../ui-kit/Button/Button';
import { Gallery, GalleryProps } from './Gallery';
import { Gallery as MobileGallery } from './Gallery.mobile';

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

export default {
  default: (
    <div className="container grid grid-cols-12">
      <Gallery className="col-span-12" {...defaultProps} />
    </div>
  ),
  'text and button': (
    <div className="container grid grid-cols-12">
      <Gallery className="col-span-12" {...textAndButtonProps} />
    </div>
  ),
  'list and button': (
    <div className="container grid grid-cols-12">
      <Gallery className="col-span-12" {...listAndButtonProps} />
    </div>
  ),
  'text and no button': (
    <div className="container grid grid-cols-12">
      <Gallery className="col-span-12" {...textAndNoButtonProps} />
    </div>
  ),
  'only title': (
    <div className="container grid grid-cols-12">
      <Gallery className="col-span-12" {...onlyTitleProps} />
    </div>
  ),
  mobile: (
    <div className="container grid grid-cols-12">
      <MobileGallery className="col-span-12" {...defaultProps} />
    </div>
  ),
};
