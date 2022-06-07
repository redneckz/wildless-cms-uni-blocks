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

export type DynamicImport = <T>(getSource: () => Promise<T>) => {
  loading: boolean;
  imported: T;
};

export interface ContentPageContext {
  useRouter: () => Router;
  useState: <T>(initialState: T) => [T, (_: T) => void];
  useSitemap: () => HeaderContent;
  useLikeService: () => LikeService;
  useDynamicImport: DynamicImport;
  handlerDecorator?: HandlerDecorator;
}
