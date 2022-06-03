import { mergeTopItems } from './mergeTopItems';

describe('mergeTopItems', () => {
  it('should return original items if no extra items provided', () => {
    const items = [{ href: '/' }];
    expect(mergeTopItems(items)).toEqual(items);
  });

  it('should append extra items to original ones', () => {
    const items = [{ href: '/' }];
    const extraItems = [{ href: '/foo' }, { href: '/bar' }];
    expect(mergeTopItems(items, extraItems)).toEqual(items.concat(extraItems));
  });

  it('should replace original items with duplicating extra items (by href)', () => {
    const items = [{ href: '/foo' }];
    const extraItems = [{ href: '/foo', text: 'foo' }, { href: '/bar' }];
    expect(mergeTopItems(items, extraItems)).toEqual(extraItems);
  });
});
