import { JSX } from '@redneckz/uni-jsx';
import { GridIcon, LoupeIcon, ProfileIcon } from '../Icons/index';
import { TopItem } from '../ui-kit/TopItem';
import { HeaderSecondaryMenuButton } from './HeaderSecondaryMenuButton';

interface HeaderSecondaryMenuProps {
  location?: string;
  className?: string;
}

export const HeaderSecondaryMenu = JSX<HeaderSecondaryMenuProps>(({ location, className }) => {
  return (
    <div className={`flex items-center ${className || ''}`}>
      <TopItem className="mr-5" flat={true} href="#" text={location} ariaLabel="Местоположение" />
      <TopItem
        className="mr-7"
        flat={true}
        href="#"
        text="Офисы и банкоматы"
        ariaLabel="Список всех доступных офисов и банкоматов"
      />
      <HeaderSecondaryMenuButton
        className="mr-5 text-primary-text hover:text-primary-main"
        ariaLabel="Поиск по сайту"
      >
        {LoupeIcon({ 'aria-hidden': true })}
      </HeaderSecondaryMenuButton>
      <HeaderSecondaryMenuButton
        className="mr-5 text-primary-text hover:text-primary-main"
        ariaLabel="Профиль"
      >
        {ProfileIcon({ 'aria-hidden': true })}
      </HeaderSecondaryMenuButton>
      <HeaderSecondaryMenuButton
        className="mr-5 text-main hover:text-secondary-hover min-w-[32px] min-h-[32px]"
        ariaLabel="Дополнительные ссылки"
      >
        {GridIcon({ 'aria-hidden': true })}
      </HeaderSecondaryMenuButton>
    </div>
  );
});
