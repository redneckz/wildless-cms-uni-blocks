import '../setup-fixture';

import { Button } from './Button';

export default {
  'primary (Private clients)': (
    <div data-theme="pc">
      <Button href="https://www.rshb.ru/" target="_blank" text="Сайт РСХБ" version="primary" />
    </div>
  ),
  'secondary (Private clients)': (
    <div data-theme="pc">
      <Button href="https://www.rshb.ru/" target="_blank" text="Сайт РСХБ" version="secondary" />
    </div>
  ),
  'primary (Business clients)': (
    <div data-theme="bc">
      <Button href="https://www.rshb.ru/" target="_blank" text="Сайт РСХБ" version="primary" />
    </div>
  ),
  'secondary (Business clients)': (
    <div data-theme="bc">
      <Button href="https://www.rshb.ru/" target="_blank" text="Сайт РСХБ" version="secondary" />
    </div>
  ),
  'primary (Ecosystem own)': (
    <div data-theme="eo">
      <Button href="https://www.rshb.ru/" target="_blank" text="Сайт РСХБ" version="primary" />
    </div>
  ),
  'secondary (Ecosystem own)': (
    <div data-theme="eo">
      <Button href="https://www.rshb.ru/" target="_blank" text="Сайт РСХБ" version="secondary" />
    </div>
  ),
  'primary (disabled)': (
    <Button
      href="https://www.rshb.ru/"
      target="_blank"
      text="Сайт РСХБ"
      version="primary"
      disabled
    />
  ),
  'secondary (disabled)': (
    <Button
      href="https://www.rshb.ru/"
      target="_blank"
      text="Сайт РСХБ"
      version="secondary"
      disabled
    />
  ),
};
