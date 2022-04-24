import { mapJSON } from './mapJSON';

describe('mapJSON', () => {
  it('should map scalars', async () => {
    const mapper = (_: any) => (typeof _ === 'string' ? '<MAPPED>' : _);
    expect(await mapJSON('foo', mapper)).toBe('<MAPPED>');
  });

  it('should map arrays', async () => {
    const mapper = (_: any) => (Array.isArray(_) ? _.map((item) => item.toUpperCase()) : _);
    expect(await mapJSON(['foo', 'bar', 'baz'], mapper)).toEqual(['FOO', 'BAR', 'BAZ']);
  });

  it('should map objects', async () => {
    const mapper = (_: any) => ('bar' in _ ? { ..._, bar: '<MAPPED>' } : _);
    expect(await mapJSON({ foo: { bar: 'baz' } }, mapper)).toEqual({ foo: { bar: '<MAPPED>' } });
  });

  it('should support async mappers', async () => {
    const mapper = (_: any) => ('bar' in _ ? Promise.resolve({ ..._, bar: '<MAPPED>' }) : _);
    expect(await mapJSON({ foo: { bar: 'baz' } }, mapper)).toEqual({ foo: { bar: '<MAPPED>' } });
  });

  it('should map nil values as is', async () => {
    const mapper = (_: any) => (!_ ? '<EMPTY>' : _);
    expect(await mapJSON([null, undefined, ''], mapper)).toEqual([null, undefined, '<EMPTY>']);
  });
});
