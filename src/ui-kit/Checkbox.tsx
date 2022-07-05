import { JSX } from '@redneckz/uni-jsx';
import type { CheckboxProps } from './CheckboxProps';

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
        <svg
          className="absolute left-2"
          width="11"
          height="9"
          viewBox="0 0 11 9"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.2071 0.792893C10.5976 1.18342 10.5976 1.81658 10.2071 2.20711L4.20711 8.20711C3.81658 8.59763 3.18342 8.59763 2.79289 8.20711L0.292893 5.70711C-0.0976311 5.31658 -0.0976311 4.68342 0.292893 4.29289C0.683417 3.90237 1.31658 3.90237 1.70711 4.29289L3.5 6.08579L8.79289 0.792893C9.18342 0.402369 9.81658 0.402369 10.2071 0.792893Z"
            fill="white"
          />
        </svg>
      ) : null}
      {text ? <span className="font-sans ml-2 text-sm cursor-pointer">{text}</span> : null}
    </label>
  </div>
));
