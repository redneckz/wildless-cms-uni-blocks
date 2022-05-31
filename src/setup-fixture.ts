import { setup } from '@redneckz/uni-jsx';
import runtime from 'react/jsx-runtime';
import type { ContentPageContext } from './ContentPageContext';

const { jsx, jsxs } = runtime as any;
setup(jsx, jsxs);

const TEST_ORIGIN = 'http://localhost:5001';

export const context: ContentPageContext = {
  useRouter: () => ({
    href: `${TEST_ORIGIN}/credits`,
    pathname: '/credits',
    query: {},
    push: (url: string) => {
      console.log(url);
    },
  }),
  useSitemap: () => ({
    topItems: [
      {
        href: TEST_ORIGIN,
        text: 'Экосистема Своё',
        items: [
          {
            href: `${TEST_ORIGIN}/credit-cards`,
            text: 'Кредитные карты',
          },
          {
            href: `${TEST_ORIGIN}/debit-cards`,
            text: 'Дебетовые карты',
          },
          {
            href: `${TEST_ORIGIN}/credits`,
            text: 'Кредиты',
          },
          {
            href: `${TEST_ORIGIN}/deposits`,
            text: 'Вклады',
          },
          {
            href: `${TEST_ORIGIN}/investment`,
            text: 'Инвестиции',
          },
          {
            href: `${TEST_ORIGIN}/mortgage`,
            text: 'Ипотека',
          },
          {
            href: `${TEST_ORIGIN}/insurance`,
            text: 'Страхование',
          },
          {
            href: `https://rshb.ru/transfers`,
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
