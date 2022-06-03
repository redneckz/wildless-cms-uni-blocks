import type { HeaderContent } from './Header';

export interface Router {
  pathname: string;
  query: Record<string, string | string[] | undefined>;
  href?: string;
  basePath?: string;
  push: (url: string) => void;
}

export interface LikeService {
  likeCount: number;
  like: () => void;
  dislike: () => void;
}

export type HandlerDecorator = <F extends Function>(handler: F, targetContent: any) => F;

export interface ContentPageContext {
  useRouter: () => Router;
  useSitemap: () => HeaderContent;
  useLikeService: () => LikeService;
  handlerDecorator?: HandlerDecorator;
}
