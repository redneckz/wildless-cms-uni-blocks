import { Button as MobileButton } from '../../ui-kit/Button/Button.mobile';
import { Icon } from '../../ui-kit/Icon/Icon';
import type { BaseTileIconButton } from './BaseTileProps';

export function renderButton({ icon, ...button }: BaseTileIconButton, i: number) {
  if (!button?.text) return;

  return icon ? (
    <MobileButton
      key={String(i)}
      appendLeft={<Icon name={icon} width="24" height="24" />}
      {...button}
    />
  ) : (
    <MobileButton key={String(i)} {...button} />
  );
}
