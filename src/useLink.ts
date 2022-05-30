import { HandlerDecorator, Router } from './ContentPageContext';
import type { LinkContent } from './ui-kit/Link';
import { isURL, toRelativeHref } from './utils/url';

const defaultHandlerDecorator: HandlerDecorator = (_) => _;

export function useLink(
  {
    router,
    handlerDecorator = defaultHandlerDecorator,
  }: { router: Router; handlerDecorator?: HandlerDecorator },
  link: Partial<LinkContent>,
) {
  const href = toRelativeHref(link.href, router.href);
  return {
    ...link,
    href,
    onClick: handlerDecorator((ev: MouseEvent) => {
      const isLocalHref = href && !isURL(href);
      const isLocalTarget = !link.target || link.target === '_self';
      if (isLocalHref && isLocalTarget) {
        ev.preventDefault();
        router.push(href);
      }
    }),
  };
}
