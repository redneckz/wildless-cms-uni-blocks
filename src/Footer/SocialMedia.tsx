import { JSX } from '@redneckz/uni-jsx';
import { LinkContent, UniBlocksComponentProps } from '../types';
import { TelegramIcon, VKIcon, OkIcon } from '../Icons';
import { useLink } from '../useLink';

const ORIGINS = [
  { text: ['t.me', 'telegram.org'], icon: TelegramIcon },
  { text: ['vk.com'], icon: VKIcon },
  { text: ['ok.ru'], icon: OkIcon },
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
  const Icon = ORIGINS.map((_) => _.text.some((el) => href?.includes(el)) && _.icon).find(Boolean);
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
