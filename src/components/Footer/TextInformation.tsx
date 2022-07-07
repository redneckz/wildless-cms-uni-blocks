import { JSX } from '@redneckz/uni-jsx';
import type { LinkContent } from '../../model/LinkContent';
import { useLink } from '../../hooks/useLink';
import { FooterLink } from './FooterLink';

export const TextInformation = JSX<FooterLink>(({ className, links, context }) => {
  const router = context.useRouter();
  const { handlerDecorator } = context;
  return (
    <div className={`${className || ''}`}>
      <div className="pt-5 pb-[5px]">
        <span className="font-sans font-normal text-xs text-secondary-text">
          {`\u00a9\u00A02000-${new Date().getFullYear()}\u00A0АО \u00ABРоссельхозбанк\u00BB Генеральная лицензия Банка России \u2116\u00A03349 от\u00A012.08.2015\u00A0г.`}
        </span>
      </div>
      {links?.length ? (
        <div className="flex justify-start items-start gap-5 pt-[5px]">
          {links.map((_, i) => (
            <TextInformationLink
              key={String(i)}
              index={i}
              {...useLink({ router, handlerDecorator }, _)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
});

interface TextInformationLinkProps extends LinkContent {
  className: string;
  index: number;
  onClick: (ev: MouseEvent) => any;
}

const TextInformationLink = JSX<Partial<TextInformationLinkProps>>(
  ({ className, index, text, href, target, onClick }) => (
    <a
      className={`font-sans font-normal text-xs text-secondary-text visited:text-secondary-text hover:text-primary-text inline-block no-underline max-w-[292px] ${
        className || ''
      }`}
      href={href}
      target={target}
      onClick={onClick}
    >
      {text || `Документ ${index}`}
    </a>
  ),
);
