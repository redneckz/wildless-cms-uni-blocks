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

export interface Search {
  term: string;
  setTerm: (t: string) => void;
}

export type AsyncDataHook = <Data, Error = any>(
  key: string,
  fetcher: () => Promise<Data>,
) => { data?: Data; error?: Error };

export type GeolocationHook = (defaultLocation: string) => [string, () => void];

export interface ContentPageContext {
  useRouter: () => Router;
  useState: <State>(initialState: State) => [State, (_: State) => void];
  useAsyncData: AsyncDataHook;
  useGeolocation: GeolocationHook;
  useLikeService: () => LikeService;
  useSearch: () => Search;
  handlerDecorator?: HandlerDecorator;
}
