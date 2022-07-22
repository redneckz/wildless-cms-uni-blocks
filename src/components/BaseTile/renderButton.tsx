import { Button } from '../../ui-kit/Button/Button';
import { Icon } from '../../ui-kit/Icon/Icon';
import type { BaseTileIconButton } from './BaseTileProps';

export function renderButton({ icon, ...button }: BaseTileIconButton, i: number) {
  if (!button?.text) return;

  return icon ? (
    <Button key={String(i)} appendLeft={<Icon name={icon} width="24" height="24" />} {...button} />
  ) : (
    <Button key={String(i)} {...button} />
  );
}
