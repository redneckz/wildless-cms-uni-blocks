import { setup } from '@redneckz/uni-jsx';
import { projectSettings } from './ProjectSettings';

import runtime from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import type { ContentPageContext } from './ContentPageContext';

const { jsx, jsxs } = runtime as any;
setup(jsx, jsxs);

projectSettings.setup({
  PROD_BRANCH: 'master',
  FORCED_DRAFT_FLOW: false,
  DADATA_TOKEN: '3d9a50a398fe6e919ec0b355ca4d23779f078df4',
});

const TEST_ORIGIN = 'http://localhost:5001';

export const context: ContentPageContext = {
  useState,
  useRouter: () => ({
    href: `${TEST_ORIGIN}/credits`,
    pathname: '/credits',
    query: {},
    push: (url: string) => {
      console.log(url);
    },
  }),
  useAsyncData: (key, fetcher) => {
    const [data, setData] = useState();
    useEffect(() => {
      fetcher().then((_) => {
        setData(_);
      });
    }, [key, fetcher]);
    return { data };
  },
  useGeolocation: (defaultLocation, fetcher) => {
    const [city, setCity] = useState(defaultLocation);

    const getCity = () => {
      fetcher().then((_) => {
        setCity(_);
      });
    };

    return [city, getCity];
  },
  useLikeService: () => ({
    likeCount: 0,
    like: () => {
      console.log('like');
    },
    dislike: () => {
      console.log('dislike');
    },
  }),
  handlerDecorator:
    (handler, targetContent): any =>
    (ev) => {
      ev.preventDefault();
      console.log(ev.target, ev, targetContent);
    },
  useSearch: () => ({
    term: 'кредит',
    setTerm: (text: string) => console.log(text),
  }),
};
