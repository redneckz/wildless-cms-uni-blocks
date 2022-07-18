import { JSX } from '@redneckz/uni-jsx';
import { useLink } from '../../hooks/useLink';
import type { LinkProps } from '../../model/LinkProps';
import type { UniBlockProps } from '../../types';
import { Button } from '../../ui-kit/Button/Button';
import { Icon } from '../../ui-kit/Icon/Icon';
import type { IconName } from '../../ui-kit/Icon/IconProps';

const ICONS_MAP: Array<{
  origins: string[];
  icon: IconName;
  label: string;
  width: string;
  height: string;
}> = [
  {
    origins: ['t.me', 'telegram.org'],
    icon: 'TelegramIcon',
    label: 'Телеграм',
    width: '20px',
    height: '16px',
  },
  { origins: ['vk.com'], icon: 'VKIcon', label: 'ВКонтакте', width: '24px', height: '12px' },
  { origins: ['ok.ru'], icon: 'OkIcon', label: 'Одноклассники', width: '12px', height: '20px' },
];

export interface SocialMediaProps extends UniBlockProps {
  media?: Omit<LinkProps, 'text'>[];
}

export const SocialMedia = JSX<SocialMediaProps>(({ className, media, context }) => {
  const router = context.useRouter();
  const { handlerDecorator } = context;
  return (
    <div className={`flex items-end justify-end gap-2 pt-[30px] pb-7 ${className || ''}`}>
      {media?.map((_, index) => (
        <MediaButton key={String(index)} {...useLink({ router, handlerDecorator }, _)} />
      ))}
    </div>
  );
});

interface MediaButtonProps {
  href?: string;
}

const MediaButton = JSX<MediaButtonProps>(({ href }) => {
  const { icon, label, width, height } =
    ICONS_MAP.find(({ origins }) => origins.some((_) => href?.includes(_))) || {};

  if (!icon) return null;

  return (
    <Button
      rounded
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="border-solid border border-main-divider w-9 h-9 flex items-center justify-center hover:fill-primary-main"
      appendLeft={<Icon name={icon} width={width} height={height} asSVG />}
    />
  );
});
