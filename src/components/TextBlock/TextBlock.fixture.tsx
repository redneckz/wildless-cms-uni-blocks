import { context } from '../../setup-fixture';
import { TextBlock } from './TextBlock';
import type { Picture } from '../../model/Picture';

const image: Picture = {
  src: 'bank-card.png',
  format: 'webp',
  size: {
    width: 48,
    height: 48,
  },
};

export default (
  <div className="font-sans overflow-hidden">
    <div>
      <p>Private clients</p>
      <div className="flex flex-col gap-6" data-theme="pc">
        <TextBlock
          context={context}
          title="Все карты Россельхозбанка работают"
          description="Если не планируете поездку за границу, продолжайте пользоваться картой Своя. Для поездок за границу можно заказать карту 'Кредитная карта Своя Union Pay' на сайте и в приложении Россельхозбанка"
          blockVersion="primary"
          iconVersion="small"
        />
        <TextBlock
          context={context}
          title="Все карты Россельхозбанка работают"
          description="Если не планируете поездку за границу, продолжайте пользоваться картой Своя. Для поездок за границу можно заказать карту 'Кредитная карта Своя Union Pay' на сайте и в приложении Россельхозбанка"
          blockVersion="primary"
          iconVersion="big"
          image={image}
        />
        <TextBlock
          context={context}
          title="Все карты Россельхозбанка работают"
          description="Если не планируете поездку за границу, продолжайте пользоваться картой Своя. Для поездок за границу можно заказать карту 'Кредитная карта Своя Union Pay' на сайте и в приложении Россельхозбанка"
          blockVersion="primary"
          iconVersion="none"
        />
        <TextBlock
          context={context}
          description="Если не планируете поездку за границу, продолжайте пользоваться картой Своя. Для поездок за границу можно заказать карту 'Кредитная карта Своя Union Pay' на сайте и в приложении Россельхозбанка"
          blockVersion="primary"
          iconVersion="small"
        />
        <TextBlock
          context={context}
          title="Все карты Россельхозбанка работают"
          description="Если не планируете поездку за границу, продолжайте пользоваться картой Своя. Для поездок за границу можно заказать карту 'Кредитная карта Своя Union Pay' на сайте и в приложении Россельхозбанка"
          blockVersion="secondary"
          iconVersion="small"
        />
        <TextBlock
          context={context}
          title="Все карты Россельхозбанка работают"
          description="Если не планируете поездку за границу, продолжайте пользоваться картой Своя. Для поездок за границу можно заказать карту 'Кредитная карта Своя Union Pay' на сайте и в приложении Россельхозбанка"
          blockVersion="secondary-light"
          iconVersion="small"
        />
      </div>
    </div>
    <div>
      <p>Business clients</p>
      <div className="flex flex-col gap-6" data-theme="bc">
        <TextBlock
          context={context}
          title="Все карты Россельхозбанка работают"
          description="Если не планируете поездку за границу, продолжайте пользоваться картой Своя. Для поездок за границу можно заказать карту 'Кредитная карта Своя Union Pay' на сайте и в приложении Россельхозбанка"
          blockVersion="primary"
          iconVersion="small"
        />
        <TextBlock
          context={context}
          title="Все карты Россельхозбанка работают"
          description="Если не планируете поездку за границу, продолжайте пользоваться картой Своя. Для поездок за границу можно заказать карту 'Кредитная карта Своя Union Pay' на сайте и в приложении Россельхозбанка"
          blockVersion="secondary"
          iconVersion="small"
        />
        <TextBlock
          context={context}
          title="Все карты Россельхозбанка работают"
          description="Если не планируете поездку за границу, продолжайте пользоваться картой Своя. Для поездок за границу можно заказать карту 'Кредитная карта Своя Union Pay' на сайте и в приложении Россельхозбанка"
          blockVersion="secondary-light"
          iconVersion="small"
        />
      </div>
    </div>
    <div>
      <p>Ecosystem own</p>
      <div className="flex flex-col gap-6" data-theme="eo">
        <TextBlock
          context={context}
          title="Все карты Россельхозбанка работают"
          description="Если не планируете поездку за границу, продолжайте пользоваться картой Своя. Для поездок за границу можно заказать карту 'Кредитная карта Своя Union Pay' на сайте и в приложении Россельхозбанка"
          blockVersion="primary"
          iconVersion="small"
        />
        <TextBlock
          context={context}
          title="Все карты Россельхозбанка работают"
          description="Если не планируете поездку за границу, продолжайте пользоваться картой Своя. Для поездок за границу можно заказать карту 'Кредитная карта Своя Union Pay' на сайте и в приложении Россельхозбанка"
          blockVersion="secondary"
          iconVersion="small"
        />
        <TextBlock
          context={context}
          title="Все карты Россельхозбанка работают"
          description="Если не планируете поездку за границу, продолжайте пользоваться картой Своя. Для поездок за границу можно заказать карту 'Кредитная карта Своя Union Pay' на сайте и в приложении Россельхозбанка"
          blockVersion="secondary-light"
          iconVersion="small"
        />
      </div>
    </div>
  </div>
);
