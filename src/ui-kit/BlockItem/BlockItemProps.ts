export type BlockItemVersion = 'primary' | 'secondary';

export interface BlockItemContent {
  text?: string;
}

export interface BlockItemProps extends BlockItemContent {
  className?: string;
  version?: BlockItemVersion;
  isDotted?: boolean;
}
