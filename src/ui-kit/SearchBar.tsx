import { JSX } from '@redneckz/uni-jsx';
import { UniBlocksComponentProps } from '../types';
import { LoupeIcon } from '../Icons/index';

export const SearchBar = JSX<UniBlocksComponentProps>(({ className, context }) => {
  const search = context.useSearch();
  return (
    <form className={`relative ${className || ''}`}>
      <div className="absolute rounded-l-full h-full flex items-center justify-center pl-4 max-w-[170px] gap-3.5">
        <div className="w-[24px] h-[24px]">{LoupeIcon()}</div>
        <span className="font-sans font-normal text-sm text-secondary-text">Поиск по сайту</span>
      </div>
      <input
        className="pl-[170px] w-full font-sans font-normal text-sm border border-solid border-main-divider rounded-full h-full box-border outline-none"
        value={search.term}
        onChange={(e) => search.setTerm(e.target.value)}
        type="text"
        placeholder="Поиск по сайту"
        name="s"
      />
      <button
        type="submit"
        className="absolute font-sans font-normal text-sm cursor-pointer bg-transparent hover:bg-primary-hover active:bg-primary-active text-primary-main hover:text-white border-none px-5 rounded-r-full h-full top-0 right-0 outline-none"
        onClick={(e) => {
          e.preventDefault();
          console.log('click');
        }}
      >
        Найти
      </button>
    </form>
  );
});
