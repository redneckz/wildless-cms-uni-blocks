import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import util from 'util';
import type { ImgSource, Picture } from '../types.js';
import type { TransformationOptions } from './TransformationOptions.js';

const mkdir = util.promisify(fs.mkdir);

export async function transformPicture(
  pagePath: string,
  picture: Picture,
  options: TransformationOptions,
): Promise<Picture> {
  const sources = picture.sources || [];
  const [transformedPicture, ...transformedSources] = await Promise.all(
    [picture].concat(sources).map((_) => transformImg(pagePath, picture.src, { ...options, ..._ })),
  );
  return {
    ...picture,
    src: transformedPicture,
    sources: transformedSources.map((_, i) => ({
      ...sources[i],
      src: _,
    })),
  };
}

async function transformImg(
  pagePath: string,
  src: string,
  transformationOptions: TransformationOptions & ImgSource,
): Promise<string> {
  const { contentDir, publicDir, format, options, size } = transformationOptions;

  const imgPath = `${path.dirname(pagePath)}/${src}`;
  let chain = sharp(imgPath);
  if (size) chain = chain.resize(size);
  if (format) chain = chain.toFormat(format, options);

  const transformedSrc = transformSrc(src, transformationOptions);
  const transformedImgPath = `${publicDir}/${path.relative(
    contentDir,
    `${path.dirname(pagePath)}/${transformedSrc}`,
  )}`;

  await mkdir(path.dirname(transformedImgPath), { recursive: true });
  await chain.toFile(transformedImgPath);

  return transformedSrc;
}

function transformSrc(src: string, { format, size }: TransformationOptions & ImgSource): string {
  const noTransform = !format && !size;
  if (noTransform) return src;

  const suffix = [size?.width, size?.height].filter(Boolean).join('-');
  return `${path.basename(src, path.extname(src))}${suffix ? `-${suffix}` : ''}.${
    String(format) || path.extname(src)
  }`;
}
