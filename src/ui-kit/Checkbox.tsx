import { JSX } from '@redneckz/uni-jsx';
import type { CheckboxProps } from './CheckboxProps';
import { SVG } from './SVG';

const CHECK_PATHS = [
  {
    d: 'M10.207.793a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414 0l-2.5-2.5a1 1 0 0 1 1.414-1.414L3.5 6.086 8.793.793a1 1 0 0 1 1.414 0Z',
    fillRule: 'evenodd',
    clipRule: 'evenodd',
    fill: 'white',
  },
];

export const Checkbox = JSX<CheckboxProps>(({ text, checked, onChange, className }) => (
  <div className={className}>
    <label className="flex items-center cursor-pointer relative">
      <input
        className={`appearance-none w-5 h-5 border-solid border rounded ${
          checked ? 'bg-primary-main border-primary-main' : 'border-black'
        }`}
        type="checkbox"
        onChange={() => {
          onChange(!checked);
        }}
      />
      {checked ? (
        <SVG
          paths={CHECK_PATHS}
          className="absolute left-2 ml-px"
          width="11"
          height="9"
          fill="white"
          viewBox="0 0 11 9"
        />
      ) : null}
      {text ? <span className="font-sans ml-2 text-sm cursor-pointer">{text}</span> : null}
    </label>
  </div>
));
