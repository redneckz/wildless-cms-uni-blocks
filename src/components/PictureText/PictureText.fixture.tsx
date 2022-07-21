import { context } from '../../setup-fixture';

import type { Picture } from '../../model/Picture';
import { PictureText } from './PictureText';
import type { PictureTextContent } from './PictureTextContent';

const image: Picture = {
  src: 'legal-support-business.png',
  format: 'webp',
  size: {
    width: 200,
    height: 200,
  },
  alt: 'Варианты потребительского кредита',
};

export const PICTURE_TEXT: PictureTextContent = {
  title: 'Варианты потребительского кредита',
  benefits: [
    {
      label: 'Кредит по одному документу',
      description: 'До 300 тыс ₽ по упрощённой процедуре получения кредита',
      icon: 'DocumentTextIcon',
    },
    {
      label: 'Кредит на общих условиях',
      description: 'До 5 млн ₽ на общих условиях получения кредита',
      icon: 'DiscountShapeIcon',
    },
  ],
  image,
};

export default {
  default: (
    <div className="container grid grid-cols-12">
      <PictureText className="col-span-12" context={context} {...PICTURE_TEXT} />
    </div>
  ),
};
