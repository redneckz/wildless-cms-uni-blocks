import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../types';
import { Button } from './Button/Button';
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
            htmlFor="search-bar-input"
            className="font-sans font-normal text-base text-secondary-text"
          >
            Поиск по сайту
          </label>
        )}
      </div>
      <input
        id="search-bar-input"
        className={
          'h-12 pl-12 w-full peer font-sans font-normal text-base text-black border border-solid rounded h-full box-border outline-none pr-[6%] border-main-divider focus:border-primary-text'
        }
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        type="text"
        name="search-bar-input"
      />
      <Button
        version="primary"
        text="Найти"
        className="invisible peer-focus:visible absolute top-1 right-1"
        onClick={(e) => {
          e.preventDefault();
          console.log('click');
        }}
      >
        <div className="font-normal text-sm px-9 py-[9px]">Найти</div>
      </Button>
    </form>
  );
});
