import { JSX } from '@redneckz/uni-jsx';
import type { CheckboxProps } from './CheckboxProps';
import { SVG } from '../SVG';

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
        className={`peer appearance-none w-5 h-5 border-solid border ${
          checked ? 'border-black' : 'border-main-stroke'
        } rounded checked:bg-primary-main checked:border-primary-main m-0`}
        type="checkbox"
        onChange={(e) => {
          onChange(e.target.checked);
        }}
        checked={checked}
      />
      <SVG
        paths={CHECK_PATHS}
        className="hidden absolute left-1 ml-px peer-checked:block"
        width="11"
        height="9"
        fill="white"
        viewBox="0 0 11 9"
      />
      {text ? (
        <span className="font-sans ml-3 text-sm leading-5 cursor-pointer">{text}</span>
      ) : null}
    </label>
  </div>
));
