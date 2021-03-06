Файл содержит информацию, полезную разработчикам новых унифицированных блоков.

### Стили

#### Размер common.css

##### Использование классов

- Не использовать классы `space-...`, обходиться `margin` и `gap`
- Минимизировать использование `grid-cols-...`
- Минимизировать использование псевдоэлементов
- Минимизировать использование `transition`

##### Унификация

Все

- отступы
- высоты
- ширины
- скругления
- ховеры
- границы
  элементов должны быть унифицированы, расхождения обсудить с дизайнерами

##### Пересечение с зарезервированными именами

При сборке tailwind проверяет исходный код на наличие совпадений с зарезервированными именами атомов. Таким образом возможно пересечение с зарезервироваными словами JS (например filter - array.filter) или с именами переменных. В случае с filter, данный атом будет отключен через конфиг tailwind

Это необходимо учитывать при создании переменных.

<!-- ##### Переопределение стандартных атомов

При переопределении стандартных атомов в итоговую сборку попадает и оригинальный атом.
-> переопределение необходимо из-за отсутсвия base, так как без него некоторые атомы работают не корректно (rotate-180), возможно стоит подключить, base и проверить размер итоговой сборки -->

### Чек-листы

#### Вёрстка блока

- Вынести декларацию типа контента блока `<block_name>Content` в отдельный файл `<block_name>Content.ts` в соответствии с требованиями в тикете
- PixelPerfect по дизайнам
  [Расширение для Chromium-браузеров](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi?hl=ru)
  [Как извлечь слой из Figma](https://www.captain-design.com/blog/how-to-export-images-in-figma/)
- Добавить fixture-файл рядом с кодом блока с именем `<block_name>.fixture.ts`
- Проверка внешнего вида на всех согласованных расширениях (используем cosmos `npm run cosmos`)
- Проверка переходов между расширениями

Если всё в порядке:

- Добавить новый блок [сюда](./src/Blocks.ts)
- Добавить тип контента блока [сюда](./src/BlockContent.ts)
- Добавить новый блок в соответствии с его схемой [сюда](./src/ContentPage.page.json)
- Проверить, что интерфейс Content (то, что будет заполнять оператор) отделён от интерфейса прочих props
- Внести интерфейс Сontent в юнион тип [тут](./src/Blocks.ts)
