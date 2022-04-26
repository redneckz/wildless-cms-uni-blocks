import { JSX } from '@redneckz/uni-jsx';

interface SVGPath {
  d: string;
  fill?: string;
}

export interface SVGProps {
  viewBox?: string;
  fill?: string;
  paths: SVGPath[]
}

export const SVG = JSX<SVGProps>(({ viewBox, fill = 'none', paths }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox} fill={fill}>
      {paths.map(({ d, fill }, i) => <path key={i} d={d} fill={fill || 'currentColor'} />)}
    </svg>
  );
});
