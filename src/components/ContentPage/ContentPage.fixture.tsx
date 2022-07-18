import { context, mobileContext } from '../../setup-fixture';

import type { ContentPageDef } from '../../types';
import { Blocks } from '../Blocks';
import { MobileBlocks } from '../MobileBlocks';
import { BlockDecorator, ContentPage } from './ContentPage';
import { toMobilePage } from './toMobilePage';

import data from './ContentPage.page.json';

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
    <ContentPage
      className="bg-main"
      context={context}
      blocksRegistry={Blocks}
      data={data as ContentPageDef}
    />
  ),
  mobile: (
    <ContentPage
      className="bg-secondary-text"
      context={mobileContext}
      blocksRegistry={MobileBlocks}
      data={toMobilePage(data as ContentPageDef)}
    />
  ),
  editor: (
    <div style={{ background: "url('grid.svg')", height: '100%' }}>
      <ContentPage
        className="bg-transparent"
        context={context}
        blocksRegistry={Blocks}
        data={data as ContentPageDef}
        blockDecorator={blockDecorator}
      />
    </div>
  ),
};
