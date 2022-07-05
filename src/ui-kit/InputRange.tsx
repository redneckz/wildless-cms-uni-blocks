import { JSX } from '@redneckz/uni-jsx';
import type { InputRangeProps } from './InputRangeProps';

export const InputRange = JSX<InputRangeProps>(
  ({ className, title, items = [], min = 1, max = 100, step = 1, value = min, onChange }) => {
    const handleChange = (value: number) => {
      if (!onChange) return;

      if (value > max) {
        onChange(max);
        return;
      }
      if (value < min) {
        onChange(min);
        return;
      }

      onChange(value);
    };

    const getBackgroundSize = () => {
      return {
        backgroundSize: `${(value * 100) / max}% 100%`,
      };
    };

    return (
      <div className={className}>
        <div className="relative">
          {title ? (
            <span className="absolute text-xs text-secondary-text top-[6px] pl-[18px]">
              {title}
            </span>
          ) : null}
          <input
            className={`font-sans text-sm w-full h-12 border-2 border-solid border-main-divider rounded-md outline-none p-0 pl-4 m-0 box-border text-primary-text ${
              title ? 'pt-4' : ''
            }`}
            value={String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
            onChange={(e) => handleChange(Number(e.target.value as string))}
          />
          <div className="absolute inset-x-0 top-[34px] px-4">
            <input
              className="box-border w-full m-0 cursor-pointer slider"
              type="range"
              min={min}
              max={max}
              step={step}
              value={value}
              onChange={(e) => handleChange(Number(e.target.value as number))}
              style={getBackgroundSize()}
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
