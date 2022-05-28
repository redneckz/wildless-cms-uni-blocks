import { setup } from '@redneckz/uni-jsx';
import runtime from 'react/jsx-runtime';
import type { ContentPageContext } from './ContentPageContext';

const { jsx, jsxs } = runtime as any;
setup(jsx, jsxs);

export const context: ContentPageContext = {
  useRouter: () => ({
    pathname: '/credits',
    query: {},
    push: (url: string) => {
      console.log(url);
    },
  }),
  useSitemap: () => ({
    topItems: [
      {
        href: '/',
        text: 'Экосистема Своё',
        items: [
          {
            href: '/credit-cards',
            text: 'Кредитные карты',
          },
          {
            href: '/debit-cards',
            text: 'Дебетовые карты',
          },
          {
            href: '/credits',
            text: 'Кредиты',
          },
          {
            href: '/deposits',
            text: 'Вклады',
          },
          {
            href: '/investment',
            text: 'Инвестиции',
          },
          {
            href: '/mortgage',
            text: 'Ипотека',
          },
          {
            href: '/insurance',
            text: 'Страхование',
          },
          {
            href: '/transfers',
            text: 'Переводы',
          },
        ],
      },
    ],
  }),
  useLikeService: () => ({
    likeCount: 0,
    like: () => {
      console.log('like');
    },
    dislike: () => {
      console.log('dislike');
    },
  }),
  handlerDecorator: (): any => (ev: Event) => {
    ev.preventDefault();
    console.log(ev.target, ev);
  },
};
