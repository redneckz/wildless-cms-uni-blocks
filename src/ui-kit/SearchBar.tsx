import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../types';
import { Icon } from './Icon/Icon';

export const SearchBar = JSX<UniBlockProps>(({ className, context }) => {
  const { term, setTerm } = context.useSearch();
  return (
    <form className={`relative ${className || ''}`}>
      <div className="absolute rounded h-full flex items-center justify-center pl-4 max-w-[170px] gap-3.5 pointer-events-none">
        <div className="w-[24px] h-[24px]">
          <Icon name="LoupeIcon" width="24" height="24" />
        </div>
        {!term && (
          <label
            for="search-bar-input"
            className="font-sans font-normal text-base text-secondary-text"
          >
            Поиск по сайту
          </label>
        )}
      </div>
      <input
        id="search-bar-input"
        className="pl-12 w-full font-sans font-normal text-base text-black border border-solid border-main-divider rounded h-full box-border outline-none pr-[6%]"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        type="text"
        name="s"
      />
      {term && (
        <button
          type="submit"
          className="absolute font-sans font-normal text-sm cursor-pointer bg-transparent hover:bg-primary-hover active:bg-primary-active text-primary-main hover:text-white border-none px-5 py-2 rounded top-1 right-1 outline-none"
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
