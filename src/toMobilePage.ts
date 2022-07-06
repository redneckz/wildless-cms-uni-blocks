import type { BlockDef, ContentPageDef } from './types';

export function toMobilePage(contentPage: ContentPageDef): ContentPageDef {
  const { blocks, slots } = contentPage;

  return {
    ...contentPage,
    blocks: blocks?.filter(({ mobile }) => !mobile?.hidden).map(toMobileBlock),
    slots:
      slots &&
      Object.keys(slots).reduce(
        (res, key) => ({
          ...res,
          [key]: {
            ...slots[key],
            blocks: slots[key].blocks?.filter(({ mobile }) => !mobile?.hidden).map(toMobileBlock),
          },
        }),
        {},
      ),
  };
}

function toMobileBlock(block: BlockDef): BlockDef {
  const { mobile } = block;
  if (mobile) {
    return {
      ...block,
      style: mobile.style?.length ? mobile.style : block.style,
    };
  } else {
    return block;
  }
}
