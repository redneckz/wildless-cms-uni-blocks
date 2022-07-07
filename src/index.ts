export { setup } from '@redneckz/uni-jsx';

export type { ProjectSettings } from './ProjectSettings';
export { projectSettings } from './ProjectSettings';

export { LikeAPI } from './api/LikeAPI';
export { DaDataAPI } from './api/DaDataAPI';

export type { SitemapContent } from './model/SitemapContent';

export type { Img, ImgSource, Picture } from './model/Picture';
export type { BlockDef, UniBlockProps, ContentPageMeta, ContentPageDef } from './types';
export type {
  ContentPageContext,
  Router,
  AsyncDataHook,
  GeolocationHook,
  LikeService,
  HandlerDecorator,
  Search,
} from './components/ContentPage/ContentPageContext';

export { ContentPageHead } from './components/ContentPage/ContentPageHead';
export type { BlockDecorator } from './components/ContentPage/ContentPage';
export { ContentPage } from './components/ContentPage/ContentPage';
export { toMobilePage } from './components/ContentPage/toMobilePage';

export { Blocks } from './components/Blocks';
export type { BlockContent } from './components/BlockContent';
export { MobileBlocks } from './components/MobileBlocks';

export * as url from './utils/url';
export { joinList } from './utils/joinList';
