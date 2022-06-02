import { JSX } from '@redneckz/uni-jsx';
import type { LinkContent } from '../ui-kit/Link';
import { useLink } from '../useLink';
import type { ContentPageContext } from '../ContentPageContext';

export interface TextInformationProps {
  className?: string;
  documents?: LinkContent[];
  context: ContentPageContext;
}

export const TextInformation = JSX<TextInformationProps>(({ className, documents, context }) => {
  const router = context.useRouter();
  const { handlerDecorator } = context;
  return (
    <div className={`text-titlexsm ${className || ''}`}>
      <div>
        &#169;&#160;2000-2022&#160;АО &#171;Россельхозбанк&#187; Генеральная лицензия Банка России
        &#8470;&#160;3349 от&#160;12.08.2015&#160;г.
      </div>
      {documents?.length ? (
        <div className="flex justify-start items-center text-secondary">
          {documents.map((_, i) => (
            <Document key={String(i)} index={i} {...useLink({ router, handlerDecorator }, _)} />
          ))}
        </div>
      ) : null}
    </div>
  );
});

interface DocumentProps extends LinkContent {
  className: string;
  index: number;
  onClick: (ev: MouseEvent) => any;
}

const Document = JSX<Partial<DocumentProps>>(
  ({ className, index, text, href, target, onClick }) => (
    <a
      className={`inline-block no-underline ${className || ''}`}
      href={href}
      target={target}
      onClick={onClick}
    >
      {text || `Документ ${index}`}
    </a>
  ),
);
