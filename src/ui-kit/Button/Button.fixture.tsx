import '../../setup-fixture';

import { Button } from './Button';
import { Icon } from '../Icon/Icon';

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
          <Button
            href="https://www.rshb.ru/"
            target="_blank"
            aboveText="Доступно в"
            appendLeft={
              /** Div need for perfect pixel */
              <div>
                <Icon name="PlayMarketIcon" width="24" height="24" />
              </div>
            }
            text="Google Play"
            version="secondary"
          />
          <Button
            href="https://www.rshb.ru/"
            target="_blank"
            aboveText="Загрузите в"
            appendLeft={
              <div>
                <Icon name="AppleIcon" width="24" height="24" />
              </div>
            }
            text="App Store"
            version="secondary"
          />
        </div>
      </div>
      <div>
        <p>Rounded with only Icon</p>
        <div className="flex gap-6" data-theme="pc">
          <Button
            rounded
            href="https://www.rshb.ru/"
            target="_blank"
            version="secondary"
            appendLeft={<Icon name="PlayMarketIcon" width="20" height="21" />}
          />
          <Button
            rounded
            href="https://www.rshb.ru/"
            target="_blank"
            version="secondary"
            appendLeft={<Icon name="AppleIcon" width="18" height="20" />}
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
