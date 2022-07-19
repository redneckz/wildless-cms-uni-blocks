export const withoutExt = (filename: string) =>
  filename.includes('.') ? filename.substring(0, filename.indexOf('.')) : filename;
