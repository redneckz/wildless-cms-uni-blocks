import { context } from './setup-fixture';
import { ComparisonTable } from './ComparisonTable';

const rowHeaders = ['test1', 'test2', 'test3', 'test4'];
const columns = [
  {
    header: {
      title: 'title1',
      icon: '',
      button: {
        text: 'Подробнее',
        href: '/credits',
      },
    },
    data: [
      [{ label: '123', description: '888' }],
      [{ label: '123', description: '888' }],
      [{ label: '123' }],
      [{ label: '123', description: '888' }],
    ],
  },
  {
    header: {
      title: 'title2',
      icon: '',
      button: {
        text: 'Подробнее',
        href: '/credits',
      },
    },
    data: [
      [{ label: '123', description: '888' }],
      [
        { label: '123', description: '888' },
        { label: '123', description: '888' },
      ],
      [{ label: '123', description: '888' }],
      [{ label: '123', description: '888' }],
    ],
  },
  {
    header: {
      title: 'title2',
      icon: '',
      button: {
        text: 'Подробнее',
        href: '/credits',
      },
    },
    data: [
      [{ label: '123', description: '888' }],
      [
        { label: '123', description: '888' },
        { label: '123', description: '888' },
      ],
      [{ label: '123', description: '888' }],
      [{ label: '123', description: '888' }],
    ],
  },
  {
    header: {
      title: 'title2',
      icon: '',
      button: {
        text: 'Подробнее',
        href: '/credits',
      },
    },
    data: [
      [{ label: '123', description: '888' }],
      [
        { label: '123', description: '888' },
        { label: '123', description: '888' },
      ],
      [{ label: '123', description: '888' }],
      [{ label: '123', description: '888' }],
    ],
  },
  {
    header: {
      title: 'title2',
      icon: '',
      button: {
        text: 'Подробнее',
        href: '/credits',
      },
    },
    data: [
      [{ label: '123', description: '888' }],
      [
        { label: '123', description: '888' },
        { label: '123', description: '888' },
      ],
      [{ label: '123', description: '888' }],
      [{ label: '123', description: '888' }],
    ],
  },
  {
    header: {
      title: 'title2',
      icon: '',
      button: {
        text: 'Подробнее',
        href: '/credits',
      },
    },
    data: [
      [{ label: '123', description: '888' }],
      [
        { label: '123', description: '888' },
        { label: '123', description: '888' },
      ],
      [{ label: '123', description: '888' }],
      [{ label: '123', description: '888' }],
    ],
  },
];

export default (
  <div className="grid grid-cols-12">
    <ComparisonTable
      className="col-span-6"
      title="Другие вклады и сбережения"
      context={context}
      rowHeaders={rowHeaders}
      columns={columns}
    />
  </div>
);
