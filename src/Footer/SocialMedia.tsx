import { JSX } from '@redneckz/uni-jsx';
import type { LinkContent } from '../model/LinkContent';
import type { UniBlockProps } from '../types';
import { Icon } from '../ui-kit/Icon';
import type { IconName } from '../ui-kit/IconProps';
import { useLink } from '../useLink';

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
  return (
    <a
      className="flex items-center justify-center border-solid border border-main-divider rounded-full no-underline outline-none w-9 h-9"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {icon && <Icon className="block" name={icon} /> /* TODO width & height */}
    </a>
  );
});
