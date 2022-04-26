import { setup } from '@redneckz/uni-jsx';
import React from 'react';
import runtime from 'react/jsx-runtime';
import { PrimaryButton } from './PrimaryButton';

const { jsx, jsxs } = runtime as any;
setup(jsx, jsxs);

export default <PrimaryButton href="https://www.rshb.ru/" target="_blank" text="Сайт РСХБ" />;
