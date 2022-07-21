import type { Router } from '../../components/ContentPage/ContentPageContext';
import type { LinkProps } from '../../model/LinkProps';
import { maxBy } from '../../utils/maxBy';
import { isSubItemActive } from './isSubItemActive';

export const findActiveSubItem =
  (router: Router) =>
  <T extends LinkProps>(items: T[] = []): T | null => {
    const possibleActiveSubItems = items?.filter(isSubItemActive(router));
    const activeSubItem = possibleActiveSubItems?.length
      ? maxBy((_: T) => _.href?.length || 0)(possibleActiveSubItems) // More specific item with max length
      : null;
    return activeSubItem;
  };
