import { context } from './setup-fixture';

import { BlockDecorator, ContentPage } from './ContentPage';

const blockDecorator: BlockDecorator = ({ blockClassName, block, render }, i) => (
  <div
    key={i}
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
  default: (
    <ContentPage context={context} className="bg-main" data={require('./ContentPage.page.json')} />
  ),
  editor: (
    <div style={{ background: "url('grid.svg')", height: '100%' }}>
      <ContentPage
        context={context}
        className="bg-transparent"
        data={require('./ContentPage.page.json')}
        blockDecorator={blockDecorator}
      />
    </div>
  ),
};
