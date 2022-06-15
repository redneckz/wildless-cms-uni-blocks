export function joinList<E>(sep: E): (list: E[]) => E[] {
  return (list) =>
    list.reduce(
      (acc, el, i) => (acc.length ? acc.concat({ ...sep, key: i }, el) : [el]),
      [] as E[],
    );
}
