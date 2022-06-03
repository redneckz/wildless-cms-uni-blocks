import type { TopMenuItem } from './types';

const cmp = (a?: TopMenuItem) => (b?: TopMenuItem) => a?.href === b?.href;

const substitute = (items?: TopMenuItem[], substitution?: TopMenuItem[]) =>
  (items || []).map((_) => substitution?.find(cmp(_)) || _);

const subtract = (minuend?: TopMenuItem[], subtrahend?: TopMenuItem[]) =>
  (minuend || []).filter((_) => !subtrahend?.find(cmp(_)));

export function mergeTopItems(left?: TopMenuItem[], right?: TopMenuItem[]): TopMenuItem[] {
  return substitute(left, right).concat(subtract(right, left));
}
