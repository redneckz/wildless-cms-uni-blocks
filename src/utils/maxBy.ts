export const maxBy =
  <Item, Value>(discriminator: (item: Item) => Value) =>
  (list: Item[]): Item =>
    list.reduceRight((a, b) => (discriminator(a) > discriminator(b) ? a : b));

export const minBy = <Item, Value>(discriminator: (item: Item) => Value) =>
  maxBy((_: Item) => -discriminator(_));
