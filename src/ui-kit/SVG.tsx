import { JSX } from '@redneckz/uni-jsx';

interface SVGPathOptions {
  fill?: string;
  stroke?: string;
  strokeLinecap?: string;
  strokeLinejoin?: string;
  strokeWidth?: string;
  strokeMiterlimit?: string;
}

interface SVGPath extends SVGPathOptions {
  d: string;
}

export interface SVGProps extends SVGPathOptions {
  className?: string;
  viewBox?: string;
  paths: SVGPath[];
}

export const SVG = JSX<SVGProps>(
  ({ className, viewBox, fill = 'none', paths, ...commonOptions }) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox={viewBox} fill={fill}>
        {paths.map(({ d, fill, ...options }, i) => (
          <path key={i} d={d} fill={fill || 'currentColor'} {...commonOptions} {...options} />
        ))}
      </svg>
    );
  },
);
