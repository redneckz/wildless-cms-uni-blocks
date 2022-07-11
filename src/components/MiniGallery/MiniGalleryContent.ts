import type { GalleryContent } from '../Gallery/GalleryContent';

/**
 * @title Мини-галерея
 * @examples [{
 *   "title": "Мини-галерея",
 *   "description": "Описание",
 *   "cards": [
 *     {
 *       "image": {
 *         "format": "webp",
 *         "size": {
 *           "width": 120,
 *           "height": 70
 *         }
 *       },
 *       "title": "Заголовок 1",
 *       "description": "Описание 1"
 *     },
 *     {
 *       "image": {
 *         "format": "webp",
 *         "size": {
 *           "width": 120,
 *           "height": 70
 *         }
 *       },
 *       "title": "Заголовок 2",
 *       "description": "Описание 2"
 *     },
 *     {
 *       "image": {
 *         "format": "webp",
 *         "size": {
 *           "width": 120,
 *           "height": 70
 *         }
 *       },
 *       "title": "Заголовок 3",
 *       "description": "Описание 3"
 *     },
 *     {
 *       "image": {
 *         "format": "webp",
 *         "size": {
 *           "width": 120,
 *           "height": 70
 *         }
 *       },
 *       "title": "Заголовок 4",
 *       "description": "Описание 4"
 *     },
 *     {
 *       "image": {
 *         "format": "webp",
 *         "size": {
 *           "width": 120,
 *           "height": 70
 *         }
 *       },
 *       "title": "Заголовок 5",
 *       "description": "Описание 5"
 *     }
 *   ]
 * }]
 */
export interface MiniGalleryContent extends GalleryContent {}
