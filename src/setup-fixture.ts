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
  handlerDecorator: (): any => (ev: Event) => {
    ev.preventDefault();
    console.log(ev.target, ev);
  },
};
