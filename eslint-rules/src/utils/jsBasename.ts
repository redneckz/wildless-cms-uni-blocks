import { basename } from 'path';

export const jsBasename = (filename: string) => basename(filename).replace(/\.[jt]sx?$/, '');
