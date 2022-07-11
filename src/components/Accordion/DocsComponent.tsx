import { Doc } from '../../ui-kit/Doc';
import type { LinkContent } from '../../model/LinkContent';

const DocsComponent = (data: LinkContent[]) => {
  return (
    <ul className="list-none p-0">
      {data.map((item, i) => (
        <li key={'doc' + i} className="mb-4 last:mb-0">
          <Doc {...item} />
        </li>
      ))}
    </ul>
  );
};

export default DocsComponent;
