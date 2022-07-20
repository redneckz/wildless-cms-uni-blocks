import type { Picture } from '../../model/Picture';
import { context } from '../../setup-fixture';
import { TextBlock } from './TextBlock';
import { TextBlockContent } from './TextBlockContent';

const image: Picture = {
  src: 'bank-card.png',
  format: 'webp',
  size: {
    width: 48,
    height: 48,
  },
};

export const TEXT_BLOCK: TextBlockContent = {
  title: 'Все карты Россельхозбанка работают',
  description:
    "Если не планируете поездку за границу, продолжайте пользоваться картой Своя. Для поездок за границу можно заказать карту 'Кредитная карта Своя Union Pay' на сайте и в приложении Россельхозбанка",
};

export default (
  <div className="container grid grid-cols-12">
    <div className="font-sans overflow-hidden col-span-12">
      <div>
        <p>Private clients</p>
        <div className="flex flex-col gap-6" data-theme="pc">
          <TextBlock context={context} {...TEXT_BLOCK} blockVersion="primary" iconVersion="small" />
          <TextBlock
            context={context}
            {...TEXT_BLOCK}
            blockVersion="primary"
            iconVersion="big"
            image={image}
          />
          <TextBlock context={context} {...TEXT_BLOCK} blockVersion="primary" iconVersion="none" />
          <TextBlock context={context} {...TEXT_BLOCK} blockVersion="primary" iconVersion="small" />
          <TextBlock
            context={context}
            {...TEXT_BLOCK}
            blockVersion="secondary"
            iconVersion="small"
          />
          <TextBlock
            context={context}
            {...TEXT_BLOCK}
            blockVersion="secondary-light"
            iconVersion="small"
          />
        </div>
      </div>
      <div>
        <p>Business clients</p>
        <div className="flex flex-col gap-6" data-theme="bc">
          <TextBlock context={context} {...TEXT_BLOCK} blockVersion="primary" iconVersion="small" />
          <TextBlock
            context={context}
            {...TEXT_BLOCK}
            blockVersion="secondary"
            iconVersion="small"
          />
          <TextBlock
            context={context}
            {...TEXT_BLOCK}
            blockVersion="secondary-light"
            iconVersion="small"
          />
        </div>
      </div>
      <div>
        <p>Ecosystem own</p>
        <div className="flex flex-col gap-6" data-theme="eo">
          <TextBlock context={context} {...TEXT_BLOCK} blockVersion="primary" iconVersion="small" />
          <TextBlock
            context={context}
            {...TEXT_BLOCK}
            blockVersion="secondary"
            iconVersion="small"
          />
          <TextBlock
            context={context}
            {...TEXT_BLOCK}
            blockVersion="secondary-light"
            iconVersion="small"
          />
        </div>
      </div>
    </div>
  </div>
);
