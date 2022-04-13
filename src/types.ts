export interface BlockDef<BlockContent> {
  type: string;
  style?: string[];
  content?: BlockContent;
  blocks?: BlockDef<BlockContent>[];
}

export interface ContentPageDef<BlockContent> {
  title: string;
  slug: string;
  style?: string[];
  blocks?: BlockDef<BlockContent>[];
}

export const GraphQL = {
  Block: `
    type BlockContent {
      primary: String
      secondary: String
    }

    type Block {
      type: String!
      style: [String!]
      content: BlockContent
      blocks: [Block!]
    }
  `,
  Page: `
    title: String!
    slug: String
    date: Date
    style: [String!]
    blocks: [Block!]
  `,
};
