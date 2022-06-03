import { JSX } from '@redneckz/uni-jsx';
import { LinkContent } from '../types';
import { TelegramIcon, VKIcon, OkIcon } from '../Icons';

export interface SocialMediaProps {
  className: string;
  media: Omit<LinkContent, 'text'>[];
}

export const SocialMedia = JSX<Partial<SocialMediaProps>>(({ className, media }) => (
  <div className={`flex items-end justify-end gap-2 py-6 ${className || ''}`}>
    {media?.map(renderMediaButton)}
  </div>
));

const renderMediaButton = (m: Omit<LinkContent, 'text'>) => {
  const regexps = [
    { regexp: /(t\.me)|(telegram\.org){1}/, icon: TelegramIcon },
    { regexp: /(vk\.com){1}/, icon: VKIcon },
    { regexp: /(ok\.ru){1}/, icon: OkIcon },
  ];

  const Icon = regexps.map((_) => (_.regexp.test(m.href || '') ? _.icon : '')).filter(Boolean)[0];
  return (
    <a
      className="flex items-center justify-center border-solid border-1 border-main-divider rounded-full no-underline outline-none w-8 h-8 gap-2"
      href={m.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="block" />
    </a>
  );
};
