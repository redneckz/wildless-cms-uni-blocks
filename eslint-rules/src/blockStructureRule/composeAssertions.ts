export const composeAssertions = <Arg>(
  ...assertions: Array<(arg: Arg) => boolean>
): ((arg: Arg) => boolean) => {
  return (arg) => assertions.map((_) => _(arg)).every(Boolean);
};
