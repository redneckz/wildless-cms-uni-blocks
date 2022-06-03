import { JSX } from '@redneckz/uni-jsx';
import { LinkContent, UniBlocksComponentProps } from '../types';
import { TelegramIcon, VKIcon, OkIcon } from '../Icons';
import { useLink } from '../useLink';

export interface SocialMediaProps extends UniBlocksComponentProps {
  media?: Omit<LinkContent, 'text'>[];
}

export const SocialMedia = JSX<SocialMediaProps>(({ className, media, context }) => {
  const router = context.useRouter();
  const { handlerDecorator } = context;
  return (
    <div className={`flex items-end justify-end gap-2 py-6 ${className || ''}`}>
      {media?.map((_) => (
        <MediaButton {...useLink({ router, handlerDecorator }, _)} />
      ))}
    </div>
  );
});

interface MediaButtonProps {
  href?: string;
}

const MediaButton = JSX<MediaButtonProps>(({ href }) => {
  const regexps = [
    { regexp: /(t\.me)|(telegram\.org){1}/, icon: TelegramIcon },
    { regexp: /(vk\.com){1}/, icon: VKIcon },
    { regexp: /(ok\.ru){1}/, icon: OkIcon },
  ];

  const Icon = regexps.map((_) => (_.regexp.test(href || '') ? _.icon : '')).filter(Boolean)[0];
  return (
    <a
      className="flex items-center justify-center border-solid border-1 border-main-divider rounded-full no-underline outline-none w-8 h-8 gap-2"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="block" />
    </a>
  );
});
