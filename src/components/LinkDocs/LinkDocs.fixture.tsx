import { LinkDocs } from './LinkDocs';
import { context } from '../../setup-fixture';
import type { LinkDocsContent } from './LinkDocsContent';

export const LinkDocsFixtureSetOne: LinkDocsContent = {
  title: 'Дополнительные документы',
  icon: 'DocIcon',
  documents: [
    { text: 'target self', href: '/abc1/cooldoc.doc', target: '_self' },
    { text: 'target blank', href: '/abc2/wtf.rtf', target: '_blank' },
    { text: 'GlassIcon', href: '/abc3/map.jpeg' },
    { text: 'no icon', href: '/abc4' },
    { text: 'документ 5', href: '/abc5' },
    { text: 'документ 6', href: '/abc6/abc.pdf' },
    { text: 'Text text text', href: '/abc7/yolo.png' },
    {
      text: 'Some more generic text, and even more, more text',
      href: '/abc8/archive.zip',
      fileSize: '2.3МБ',
    },
    { text: 'И ещё немного текста', href: '/abc9/rarniw.rar', fileSize: '666МБ' },
    {
      text: 'Форматируем, сортируем, смотрим как отображается...',
      href: '/abc10/',
      fileSize: '65ГБ',
    },
  ],
};

export const LinkDocsFixtureSetTwo: LinkDocsContent = {
  ...LinkDocsFixtureSetOne,
  columnsMode: 'single',
};

export const LinkDocsFixtureSetThree: LinkDocsContent = {
  ...LinkDocsFixtureSetOne,
  icon: 'GlassIcon',
  title: '',
};

export const LinkDocsFixtureSetFour: LinkDocsContent = {
  ...LinkDocsFixtureSetOne,
  icon: undefined,
};

export default {
  'default, 2 columns': <LinkDocs context={context} {...LinkDocsFixtureSetOne} />,
  'one column': <LinkDocs context={context} {...LinkDocsFixtureSetTwo} />,
  'another icon, no extensions': <LinkDocs context={context} {...LinkDocsFixtureSetThree} />,
  'no icon': <LinkDocs context={context} {...LinkDocsFixtureSetFour} />,
};
