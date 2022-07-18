import { JSX } from '@redneckz/uni-jsx';
import { addSpacesBetweenNumbers } from '../../utils/addSpacesBetweenNumbers';
import type { InputRangeProps } from './InputRangeProps';

export const InputRange = JSX<InputRangeProps>(
  ({ className, title, items = [], min = 1, max = 100, step = 1, value = min, onChange }) => {
    const handleChange = (value: string) => {
      if (!onChange) return;

      const sanitizedValue = Number(value.replace(/\D/g, ''));
      onChange(sanitizedValue);
    };

    const inputStyle = {
      backgroundSize: `${(((value - min) * 100) / (max - min)).toFixed(2)}% 100%`,
    };

    const handleBlur = () => {
      if (!onChange) return;

      if (value < min) onChange(min);
      if (value > max) onChange(max);
    };

    return (
      <div className={className}>
        <div className="relative">
          {title ? (
            <span className="absolute text-xs text-secondary-text top-1 mt-0.5 pl-4 ml-0.5">
              {title}
            </span>
          ) : null}
          <input
            className={`m-0 font-sans text-sm w-full h-12 border border-solid border-main-stroke rounded-md
                        outline-none p-0 pl-4 m-0 box-border text-primary-text ${
                          title ? 'pt-4' : ''
                        }`}
            value={addSpacesBetweenNumbers(value)}
            onChange={(e) => handleChange(e.target.value)}
            onBlur={handleBlur}
          />
          <div className="absolute inset-x-0 mt-0.5 top-8 px-4">
            <input
              className="box-border w-full m-0 cursor-pointer slider"
              type="range"
              min={min}
              max={max}
              step={step}
              value={value}
              onChange={(e) => handleChange(e.target.value)}
              style={inputStyle}
            />
          </div>
        </div>
        <div className="flex justify-between mt-3 mb-4">
          {items.map((item, i) => (
            <span key={String(i)} className="text-xs text-secondary-text pl-4">
              {item}
            </span>
          ))}
        </div>
      </div>
    );
  },
);
