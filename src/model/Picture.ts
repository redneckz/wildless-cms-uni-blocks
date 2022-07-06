export interface Img {
  src: string;
  alt?: string;
  title?: string;
}

export interface ImgSource {
  src: string;
  format?: 'jpeg' | 'jpg' | 'png' | 'gif' | 'webp' | 'heif' | 'avif';
  options?: Record<string, any>;
  size?: {
    width?: number;
    height?: number;
  };
}

export interface Picture extends Img, ImgSource {
  sources?: ImgSource[];
}
