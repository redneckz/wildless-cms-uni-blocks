import type { Picture } from '../../model/Picture';
import { context } from '../../setup-fixture';
import { MiniGallery, MiniGalleryProps } from './MiniGallery';

const image: Picture = {
  src: 'domovoj-kupon.png',
  format: 'webp',
  size: {
    width: 120,
    height: 70,
  },
  title: 'domovoj-kupon',
};

const defaultProps: MiniGalleryProps = {
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

const onlyTitleProps: MiniGalleryProps = {
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
      <MiniGallery className="col-span-12" {...defaultProps} />
    </div>
  ),
  'only title': (
    <div className="container grid grid-cols-12">
      <MiniGallery className="col-span-12" {...onlyTitleProps} />
    </div>
  ),
};
