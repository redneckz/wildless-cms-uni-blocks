import '../setup-fixture';

import { Button } from './Button';
import { IconButton } from './IconButton';

export default {
  all: (
    <div className="font-sans overflow-hidden">
      <div>
        <p>Private clients</p>
        <div className="flex gap-6" data-theme="pc">
          <Button href="https://www.rshb.ru/" target="_blank" text="Primary" version="primary" />
          <Button
            href="https://www.rshb.ru/"
            target="_blank"
            text="Secondary"
            version="secondary"
          />
        </div>
      </div>
      <div>
        <p>Business clients</p>
        <div className="flex gap-6" data-theme="bc">
          <Button href="https://www.rshb.ru/" target="_blank" text="Primary" version="primary" />
          <Button
            href="https://www.rshb.ru/"
            target="_blank"
            text="Secondary"
            version="secondary"
          />
        </div>
      </div>
      <div>
        <p>Ecosystem own</p>
        <div className="flex gap-6" data-theme="eo">
          <Button href="https://www.rshb.ru/" target="_blank" text="Primary" version="primary" />
          <Button
            href="https://www.rshb.ru/"
            target="_blank"
            text="Secondary"
            version="secondary"
          />
        </div>
      </div>
      <div>
        <p>Disabled</p>
        <div className="flex gap-6">
          <Button
            href="https://www.rshb.ru/"
            target="_blank"
            text="Primary"
            version="primary"
            disabled
          />
          <Button
            href="https://www.rshb.ru/"
            target="_blank"
            text="Secondary"
            version="secondary"
            disabled
          />
        </div>
      </div>
      <div>
        <p>With Icon</p>
        <div className="flex gap-6" data-theme="pc">
          <IconButton
            href="https://www.rshb.ru/"
            target="_blank"
            aboveText="Доступно в"
            text="Google Play"
            version="secondary"
            icon="PlayMarketIcon"
          />
          <IconButton
            href="https://www.rshb.ru/"
            target="_blank"
            aboveText="Загрузите в"
            text="App Store"
            version="secondary"
            icon="AppleIcon"
          />
        </div>
      </div>
    </div>
  ),
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
