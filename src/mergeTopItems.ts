import type { LinkContent } from './model/LinkContent';

const cmp = (a?: LinkContent) => (b?: LinkContent) => a?.href === b?.href;

const substitute = <L extends LinkContent>(items?: L[], substitution?: L[]): L[] =>
  (items || []).map((_) => substitution?.find(cmp(_)) || _);

const subtract = <L extends LinkContent>(minuend?: L[], subtrahend?: L[]): L[] =>
  (minuend || []).filter((_) => !subtrahend?.find(cmp(_)));

export function mergeTopItems<L extends LinkContent>(left?: L[], right?: L[]): L[] {
  return substitute(left, right).concat(subtract(right, left));
}
