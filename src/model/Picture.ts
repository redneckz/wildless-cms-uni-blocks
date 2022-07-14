export interface Img {
  /** @title Картинка */
  src: string;
  /** @title Альтернативный текст (alt) */
  alt?: string;
  /** @title Текст подсказки (title) */
  title?: string;
}

export interface ImgSource {
  /** @title Картинка */
  src: string;
  /** @title Формат */
  format?: 'jpeg' | 'jpg' | 'png' | 'gif' | 'webp' | 'heif' | 'avif';
  /** @hidden */
  options?: Record<string, any>;
  /** @title Размер изображения */
  size?: {
    /** @title Ширина */
    width?: number;
    /** @title Высота */
    height?: number;
  };
}

/** @title Изображение */
export interface Picture extends Img, ImgSource {
  /** @title Другие форматы */
  sources?: ImgSource[];
}
