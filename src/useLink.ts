import { HandlerDecorator, Router } from './ContentPageContext';
import type { LinkContent } from './types';
import { adjustHref, isURL } from './utils/url';

const defaultHandlerDecorator: HandlerDecorator = (handler, targetContent) => handler;

export function useLink(
  {
    router,
    handlerDecorator = defaultHandlerDecorator,
  }: { router: Router; handlerDecorator?: HandlerDecorator },
  link: Partial<LinkContent>,
) {
  const href = adjustHref(link.href, router);
  return {
    ...link,
    href,
    ariaLabel: link.text,
    onClick: handlerDecorator((ev: MouseEvent) => {
      const isLocalHref = href && !isURL(href);
      const isLocalTarget = !link.target || link.target === '_self';
      if (isLocalHref && isLocalTarget) {
        ev.preventDefault();
        router.push(href);
      }
    }, link),
  };
}
