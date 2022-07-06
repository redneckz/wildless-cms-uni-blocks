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
} from './ContentPageContext';

export { ContentPageHead } from './ContentPageHead';
export type { BlockDecorator } from './ContentPage';
export { ContentPage } from './ContentPage';
export { toMobilePage } from './toMobilePage';

export { Blocks } from './Blocks';
export type { BlockContent } from './BlockContent';
export { MobileBlocks } from './MobileBlocks';

export * as url from './utils/url';
export { joinList } from './utils/joinList';
