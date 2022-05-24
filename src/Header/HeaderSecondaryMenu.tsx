import { JSX } from '@redneckz/uni-jsx';

export interface HeaderSecondaryMenuProps {
  location?: string;
  className?: string;
}

const menuBtns = [{
  iconPaths: [
    'M19.5 20.5 16 17a7.5 7.5 0 1 1 2.376-3'
  ]
}, {
  iconPaths: [
    'M14.94 8.54c.22.44.35.94.35 1.47-.01 1.77-1.4 3.22-3.16 3.27a.963.963 0 0 0-.24 0 3.269 3.269 0 0 1-3.16-3.27c0-1.81 1.46-3.28 3.28-3.28M18.74 19.88A9.934 9.934 0 0 1 12 22.5c-2.6 0-4.96-.99-6.74-2.62.1-.94.7-1.86 1.77-2.58 2.74-1.82 7.22-1.82 9.94 0 1.07.72 1.67 1.64 1.77 2.58Z',
    'M4 6.5c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10-4.48-10-10-10c-1.43 0-2.8.3-4.03.85'
  ]
}]

export const HeaderSecondaryMenu = JSX<HeaderSecondaryMenuProps>(({ location, className }) => {
  return (
    <div
      className={`flex items-center ${className || ''}`}
    >
      <a
        className={`mr-5 font-sans text-primary-text text-sm hover:text-brand no-underline`}
        href="#"
      >
        {location}
      </a>
      <a
        className={`mr-7 font-sans text-primary-text text-sm hover:text-brand no-underline`}
        href="#"
      >
        Офисы и банкоматы
      </a>
      {menuBtns.map(renderMenuBtn)}
      {renderGridMenuBtn()}
    </div>
  );
});

const renderMenuBtn = (btn) => {
  const params = {
    stroke: 'currentColor',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: '2',
  };

  return (
    <button
      type="button"
      className={'mr-5 border-0 p-0 w-[24px] flex items-center text-primary-text hover:text-brand bg-inherit cursor-pointer'}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        {btn.iconPaths.map((_, i) => (
          <path
            {...params}
            d={_}
          />
        ))}
      </svg>
    </button>
  );
};
const renderGridMenuBtn = () => {
  return (
    <button
      type="button"
      className={`mr-5 border-0 p-0 w-[32px] flex items-center text-main hover:text-secondary-hover bg-inherit cursor-pointer`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">
        <rect y=".5" width="32" height="32" rx="16" fill="currentColor" />
        <path
          fill="#1c1c1c"
          d="M13 11.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM13 16.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM11.5 23a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM18 11.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM16.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM18 21.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM21.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM23 16.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM21.5 23a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
        />
      </svg>
    </button>
  );
};