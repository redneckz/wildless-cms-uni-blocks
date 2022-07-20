import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../types';
import { Icon } from './Icon/Icon';

export const SearchBar = JSX<UniBlockProps>(({ className, context }) => {
  const { term, setTerm } = context.useSearch();
  const [inputHasFocus, setInputHasFocus] = context.useState<boolean>(false);
  return (
    <form className={`relative ${className || ''}`}>
      <div className="absolute rounded h-full flex items-center justify-center pl-4 max-w-[170px] gap-3.5 pointer-events-none">
        <div className="w-[24px] h-[24px]">
          <Icon name="LoupeIcon" width="24" height="24" />
        </div>
        {!term && (
          <label
            htmlFor="search-bar-input"
            className="font-sans font-normal text-base text-secondary-text"
          >
            Поиск по сайту
          </label>
        )}
      </div>
      <input
        id="search-bar-input"
        className={`${
          inputHasFocus ? 'border-primary-text' : ''
        } pr-32 h-12 pl-12 w-full font-sans font-normal text-base text-black border border-solid border-main-divider rounded h-full box-border outline-none pr-[6%]`}
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        onFocus={(e) => setInputHasFocus(true)}
        onBlur={(e) => setInputHasFocus(false)}
        type="text"
        name="search-bar-input"
      />
      {inputHasFocus && (
        <button
          type="submit"
          version="primary"
          className="absolute font-sans font-normal cursor-pointer text-sm hover:bg-primary-hover active:bg-primary-active border-none px-9 py-[9px] rounded top-1 right-1 outline-none text-secondary-text text-white bg-primary-main"
          onClick={(e) => {
            e.preventDefault();
            console.log('click');
          }}
        >
          Найти
        </button>
      )}
    </form>
  );
});
