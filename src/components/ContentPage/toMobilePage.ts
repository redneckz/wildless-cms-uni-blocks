import type { BlockDef, ContentPageDef } from '../../types';

export function toMobilePage(contentPage: ContentPageDef): ContentPageDef {
  const blocks = contentPage.blocks?.filter(({ mobile }) => !mobile?.hidden).map(toMobileBlock);
  return {
    ...contentPage,
    blocks,
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
