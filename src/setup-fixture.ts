import { setup } from '@redneckz/uni-jsx';

import runtime from 'react/jsx-runtime';
import { useEffect, useState } from 'react';
import { DaDataAPI } from './api/DaDataAPI';
import type { ContentPageContext } from './ContentPageContext';

const { jsx, jsxs } = runtime as any;
setup(jsx, jsxs);

const TEST_ORIGIN = 'http://localhost:5001';

const DaData = DaDataAPI('https://10.80.4.9');

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
  useGeolocation: (defaultLocation) => {
    const [city, setCity] = useState(
      globalThis.localStorage.getItem('location') || defaultLocation,
    );

    const getCity = () => {
      DaData.getFetcherAddress().then((_) => {
        const location = _ || defaultLocation;
        globalThis.localStorage.setItem('location', location);
        setCity(location);
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
  useSearch: () => {
    const [term, setTerm] = useState('');

    return {
      term,
      setTerm: (text: string) => setTerm(text),
    };
  },
};
