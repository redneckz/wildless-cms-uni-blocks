import { setup } from '@redneckz/uni-jsx';
import runtime from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import type { ContentPageContext } from './ContentPageContext';

const { jsx, jsxs } = runtime as any;
setup(jsx, jsxs);

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
