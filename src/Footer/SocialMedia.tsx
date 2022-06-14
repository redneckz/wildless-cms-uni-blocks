import { JSX } from '@redneckz/uni-jsx';
import type { LinkContent, UniBlockProps } from '../types';
import { TelegramIcon, VKIcon, OkIcon } from '../Icons/index';
import { useLink } from '../useLink';

const ICONS_MAP = [
  { origins: ['t.me', 'telegram.org'], icon: TelegramIcon, label: 'Телеграм' },
  { origins: ['vk.com'], icon: VKIcon, label: 'ВКонтакте' },
  { origins: ['ok.ru'], icon: OkIcon, label: 'Одноклассники' },
];

export interface SocialMediaProps extends UniBlockProps {
  media?: Omit<LinkContent, 'text'>[];
}

export const SocialMedia = JSX<SocialMediaProps>(({ className, media, context }) => {
  const router = context.useRouter();
  const { handlerDecorator } = context;
  return (
    <div className={`flex items-end justify-end gap-2 py-6 ${className || ''}`}>
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
  const { icon: Icon, label } =
    ICONS_MAP.find(({ origins }) => origins.some((_) => href?.includes(_))) || {};
  return (
    <a
      className="flex items-center justify-center border-solid border-1 border-main-divider rounded-full no-underline outline-none w-8 h-8"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {Icon && <Icon className="block" />}
    </a>
  );
});
