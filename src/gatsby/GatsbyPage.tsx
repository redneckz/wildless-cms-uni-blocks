import { setup } from '@redneckz/uni-jsx';
import type { PageProps } from 'gatsby';
import runtime from 'react/jsx-runtime';
import type { BlockContent } from '../Blocks';
import { ContentPage } from '../ContentPage';
import type { ContentPageDef } from '../types';

import '@redneckz/wildless-cms-uni-blocks/dist/common.css';

const { jsx, jsxs } = runtime as any;
setup(jsx, jsxs);

type PageData<D extends string> = Record<D, ContentPageDef<BlockContent>>;

export const GatsbyPage =
  <D extends string>(discriminator: D) =>
  ({ data }: PageProps<PageData<D>>) =>
    <ContentPage data={data[discriminator]} />;
