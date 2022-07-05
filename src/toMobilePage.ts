import type { BlockDef, ContentPageDef } from './types';

export function toMobilePage(contentPage: ContentPageDef): ContentPageDef {
  const sections = contentPage.sections?.map((section) => ({
    ...section,
    blocks: section.blocks?.filter(({ mobile }) => !mobile?.hidden).map(toMobileBlock),
  }));

  return {
    ...contentPage,
    sections,
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
