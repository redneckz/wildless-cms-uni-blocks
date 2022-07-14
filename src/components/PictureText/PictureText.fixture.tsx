import { context } from '../../setup-fixture';

import { PictureText } from './PictureText';
import type { Picture } from '../../model/Picture';

const image: Picture = {
  src: 'legal-support-business.png',
  format: 'webp',
  size: {
    width: 200,
    height: 200,
  },
  alt: 'Варианты потребительского кредита',
};

export default {
  default: (
    <PictureText
      context={context}
      title={'Варианты потребительского кредита'}
      benefits={[
        {
          label: 'Кредит по одному документу',
          description: 'До 300 тыс ₽ по упрощённой процедуре получения кредита',
          icon: 'DocumentText',
        },
        {
          label: 'Кредит на общих условиях',
          description: 'До 5 млн ₽ на общих условиях получения кредита',
          icon: 'DiscountShape',
        },
      ]}
      image={image}
    />
  ),
};
