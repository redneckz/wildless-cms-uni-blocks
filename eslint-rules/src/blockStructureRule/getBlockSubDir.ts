import { basename, dirname } from 'path';

export const getBlockSubDir = (filename: string): string => basename(dirname(filename));
