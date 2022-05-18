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

export interface ContentPageContext {
  useRouter: () => Router;
  useLikeService: () => LikeService;
  handlerDecorator?: <F extends Function>(handler: F) => F;
}
