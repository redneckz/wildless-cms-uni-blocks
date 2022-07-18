import '../../setup-fixture';

import { BlockItem } from './BlockItem';

export default {
  primary: <BlockItem text="Совершайте любые личные покупки" />,
  'primary without dot': <BlockItem text="Совершайте любые личные покупки" isDotted={false} />,
  secondary: <BlockItem text="Совершайте любые личные покупки" version="secondary" />,
  'secondary without dot': (
    <BlockItem text="Совершайте любые личные покупки" isDotted={false} version="secondary" />
  ),
};
