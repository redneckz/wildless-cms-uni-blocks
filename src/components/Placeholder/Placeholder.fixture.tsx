import { context } from '../../setup-fixture';

import { Placeholder } from './Placeholder';

export default (
  <div className="container grid grid-cols-12">
    <Placeholder className="col-span-12" context={context} title="Неизвестный блок" />
  </div>
);
