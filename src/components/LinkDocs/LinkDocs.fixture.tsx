import { LinkDocs } from './LinkDocs';
import { context } from '../../setup-fixture';
import { LinkDocsContent } from './LinkDocsContent';

const set1: LinkDocsContent = {
  title: { text: 'Дополнительные документы' },
  documents: [
    { text: 'target self', href: '/abc1', target: '_self' },
    { text: 'target blank', href: '/abc2', target: '_blank' },
    { text: 'GlassIcon', href: '/abc3', icon: 'GlassIcon' },
    { text: 'no icon', href: '/abc4', showIcon: false },
    { text: 'документ 5', href: '/abc5', ext: 'pdf' },
    { text: 'документ 6', href: '/abc6', ext: 'pdf' },
    { text: 'PDF без отображения формата', href: '/abc7', ext: 'pdf', showExt: false },
    { text: 'расширение и размер', href: '/abc8', ext: 'doc', fileSize: '10 МБ' },
    { text: 'только размер файла', href: '/abc9', ext: 'doc', showExt: false, fileSize: '10 МБ' },
    { text: 'с размером файла', href: '/abc10', fileSize: '2.22МБ' },
  ],
};

const set2: LinkDocsContent = { ...set1, columns: 'single' };

export default {
  'default, 2 columns': <LinkDocs context={context} {...set1} />,
  'one column': <LinkDocs context={context} {...set2} />,
};
