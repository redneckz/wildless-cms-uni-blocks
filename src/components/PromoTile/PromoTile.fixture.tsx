import { context } from '../../setup-fixture';

import { PromoTile } from './PromoTile';

export default {
  default: (
    <div className="container grid grid-cols-12">
      <PromoTile
        context={context}
        className="col-span-4"
        title="Акции и спецпредложения"
        description="Пенсионный кредит по специальной процентной ставке"
        version="secondary"
        date="2022-04-16"
        buttons={[
          {
            text: 'Все акции',
            href: '/credits',
            version: 'secondary',
          },
        ]}
      />
    </div>
  ),
};
