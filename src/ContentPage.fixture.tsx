import './setup-fixture';

import { BlockDecorator, ContentPage } from './ContentPage';

const blockDecorator: BlockDecorator = ({ blockClassName, block, render }) => (
  <div
    className={`relative flex items-stretch ${blockClassName}`}
    onClick={() => console.log('Edit', block)}
  >
    {render({ block, blockClassName: `${blockClassName} w-full` })}
    <button
      className="absolute w-8 h-8 top-4 right-4 border rounded-full"
      onClick={(e) => {
        console.log('Delete', block);
        e.stopPropagation();
      }}
    >
      ╳
    </button>
  </div>
);

export default {
  default: <ContentPage className="bg-second-light" data={require('./ContentPage.page.json')} />,
  editor: (
    <div style={{ background: "url('grid.svg')" }}>
      <ContentPage
        className="bg-transparent"
        data={require('./ContentPage.page.json')}
        blockDecorator={blockDecorator}
      />
    </div>
  ),
};
