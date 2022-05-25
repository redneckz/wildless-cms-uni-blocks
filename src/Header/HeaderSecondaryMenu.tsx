import { JSX } from '@redneckz/uni-jsx';
import { Icons } from '../Icons';

export interface HeaderSecondaryMenuProps {
  location?: string;
  className?: string;
}

interface SecondaryMenuBtn {
  icon: string,
  className?: string,
}

const menuBtns: SecondaryMenuBtn[] = [{
  icon: 'LoupeIcon',
  className: 'text-primary-text hover:text-brand',
}, {
  icon: 'ProfileIcon',
  className: 'text-primary-text hover:text-brand',
}, {
  icon: 'GridIcon',
  className: 'text-main hover:text-secondary-hover w-[32px]',
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
    </div>
  );
});

const renderMenuBtn = (btn: SecondaryMenuBtn, i: number) => {
  return (
    <button
      key={String(i)}
      type="button"
      className={`mr-5 border-0 p-0 w-[24px] flex items-center bg-inherit cursor-pointer ${btn.className || ''}`}
    >
      {Icons[btn.icon]()}
    </button>
  );
};