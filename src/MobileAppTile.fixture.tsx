import { context } from './setup-fixture';

import { MobileAppTile } from './MobileAppTile';

export default {
  default: (
    <div className="grid grid-cols-12">
      <MobileAppTile
        context={context}
        className="col-span-4"
        qr={{
          href: 'https://rshbnaturaldbo.onelink.me/qhkF/f182074f?af_qr=true',
          src: 'data:image/png;base64,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',
        }}
        buttons={[
          {
            aboveText: 'Загрузите в',
            text: 'App Store',
            icon: 'AppleIcon',
            href: '#',
            version: 'secondary',
          },
          {
            aboveText: 'Доступно в',
            text: 'Google Play',
            icon: 'PlayMarketIcon',
            href: '#',
            version: 'secondary',
          },
        ]}
      />
    </div>
  ),
};
