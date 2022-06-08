import { JSX } from '@redneckz/uni-jsx';
import { LinkContent, UniBlocksComponentProps } from '../types';
import { TelegramIcon, VKIcon, OkIcon } from '../Icons';
import { useLink } from '../useLink';

const ICONS_MAP = [
  { origins: ['t.me', 'telegram.org'], icon: TelegramIcon },
  { origins: ['vk.com'], icon: VKIcon },
  { origins: ['ok.ru'], icon: OkIcon },
];

export interface SocialMediaProps extends UniBlocksComponentProps {
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
  const { icon: Icon } =
    ICONS_MAP.find(({ origins }) => origins.some((_) => href?.includes(_))) || {};
  return (
    <a
      className="flex items-center justify-center border-solid border-1 border-main-divider rounded-full no-underline outline-none w-8 h-8 gap-2"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {Icon && <Icon className="block" />}
    </a>
  );
});
