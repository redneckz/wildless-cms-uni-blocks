import type { Picture } from '../../model/Picture';

/**
 * @title Карточка
 */
export interface GalleryCard {
  /** @title Заголовок */
  title?: string;
  /** @title Описание */
  description?: string;
  image?: Picture;
  /** @title Ссылка */
  href?: string;
  /** @title Список */
  items?: string[];
}

/**
 * @title Галерея
 * @examples [{
    "title": "Галерея",
    "description": "Описание",
    "cards": [
      {
        "image": {
          "format": "webp",
          "size": {
            "width": 140,
            "height": 140
          }
        },
        "title": "Заголовок 1",
        "description": "Описание 1",
        "href": "/credit-cards",
        "items": [
          "Элемент списка 1",
          "Элемент списка 2",
          "Элемент списка 3"
        ]
      },
      {
        "image": {
          "format": "webp",
          "size": {
            "width": 140,
            "height": 140
          }
        },
        "title": "Заголовок 2",
        "description": "Описание 2",
        "href": "/credit-cards",
        "items": [
          "Элемент списка 1",
          "Элемент списка 2",
          "Элемент списка 3"
        ]
      },
      {
        "image": {
          "format": "webp",
          "size": {
            "width": 140,
            "height": 140
          }
        },
        "title": "Заголовок 3",
        "description": "Описание 3",
        "href": "/credit-cards",
        "items": [
          "Элемент списка 1",
          "Элемент списка 2",
          "Элемент списка 3"
        ]
      },
      {
        "image": {
          "format": "webp",
          "size": {
            "width": 140,
            "height": 140
          }
        },
        "title": "Заголовок 4",
        "description": "Описание 4",
        "href": "/credit-cards",
        "items": [
          "Элемент списка 1",
          "Элемент списка 2",
          "Элемент списка 3"
        ]
      },
      {
        "image": {
          "format": "webp",
          "size": {
            "width": 140,
            "height": 140
          }
        },
        "title": "Заголовок 5",
        "description": "Описание 5",
        "href": "/credit-cards",
        "items": [
          "Элемент списка 1",
          "Элемент списка 2",
          "Элемент списка 3"
        ]
      }
    ]
  }]
 */
export interface GalleryContent {
  /** @title Заголовок */
  title?: string;
  /** @title Описание */
  description?: string;
  /** @title Карточки */
  cards?: GalleryCard[];
}
