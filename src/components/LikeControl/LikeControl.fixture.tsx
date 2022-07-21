import { context } from '../../setup-fixture';

import { LikeControl } from './LikeControl';

export default (
  <div className="container grid grid-cols-12">
    <LikeControl className="col-span-12" context={context} />
  </div>
);
