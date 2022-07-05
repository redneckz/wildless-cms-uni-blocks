import '../setup-fixture';
import { Icon } from './Icon';

import { IconMap } from './IconProps';
import type { IconName } from './IconProps';

export default {
  all: (
    <div className="w-[1280px]">
      <div className="grid grid-cols-6 gap-8">
        {(Object.keys(IconMap) as Array<IconName>)
          .filter((v) => isNaN(Number(v)))
          .map((icon, i) => (
            <div key={String(i)} className="flex flex-col items-center gap-3">
              <div>{icon}</div>
              <Icon name={icon} width="64" />
            </div>
          ))}
      </div>
    </div>
  ),
};
