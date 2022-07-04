import { JSX } from '@redneckz/uni-jsx';
import type { LinkContent, UniBlockProps } from '../types';
import { Icon, IconName } from '../ui-kit/Icon';
import { useLink } from '../useLink';
import { Button } from '../ui-kit/Button';

const ICONS_MAP: Array<{ origins: string[]; icon: IconName; label: string }> = [
  { origins: ['t.me', 'telegram.org'], icon: 'TelegramIcon', label: 'Телеграм' },
  { origins: ['vk.com'], icon: 'VKIcon', label: 'ВКонтакте' },
  { origins: ['ok.ru'], icon: 'OkIcon', label: 'Одноклассники' },
];

export interface SocialMediaProps extends UniBlockProps {
  media?: Omit<LinkContent, 'text'>[];
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
  const { icon, label } =
    ICONS_MAP.find(({ origins }) => origins.some((_) => href?.includes(_))) || {};

  if (!icon) return null;

  return (
    <Button
      rounded
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="border-solid border border-main-divider w-9 h-9 flex items-center justify-center hover:text-primary-main"
      appendLeft={<Icon name={icon} />}
    />
  );
});
