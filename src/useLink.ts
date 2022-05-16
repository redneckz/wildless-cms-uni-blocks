import { ContentPageContext } from './ContentPageContext';
import type { LinkContent } from './ui-kit/Link';

const defaultHandlerDecorator: <F extends Function>(_: F) => F = (_) => _;

export function useLink(
  { useRouter, handlerDecorator = defaultHandlerDecorator }: ContentPageContext,
  link: Partial<LinkContent>,
) {
  const router = useRouter();
  const { href, target } = link;
  return {
    ...link,
    onClick: handlerDecorator((ev: MouseEvent) => {
      const isLocalHref = href && !href.includes('//');
      const isLocalTarget = !target || target === '_self';
      if (isLocalHref && isLocalTarget) {
        ev.preventDefault();
        router.push(href);
      }
    }),
  };
}
