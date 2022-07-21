import { context } from '../../setup-fixture';
import { Header } from './Header';

export default {
  default: <Header context={context} defaultLocation="Москва" />,
  transparent: <Header context={context} defaultLocation="Москва" bgColor="transparent" />,
};
