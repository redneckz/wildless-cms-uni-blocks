import { setup } from '@redneckz/uni-jsx';
import runtime from 'react/jsx-runtime';

const { jsx, jsxs } = runtime as any;
setup(jsx, jsxs);
