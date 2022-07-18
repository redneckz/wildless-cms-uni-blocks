import type { LinkProps } from './model/LinkProps';

const cmp = (a?: LinkProps) => (b?: LinkProps) => a?.href === b?.href;

const substitute = <L extends LinkProps>(items?: L[], substitution?: L[]): L[] =>
  (items || []).map((_) => substitution?.find(cmp(_)) || _);

const subtract = <L extends LinkProps>(minuend?: L[], subtrahend?: L[]): L[] =>
  (minuend || []).filter((_) => !subtrahend?.find(cmp(_)));

export function mergeTopItems<L extends LinkProps>(left?: L[], right?: L[]): L[] {
  return substitute(left, right).concat(subtract(right, left));
}
