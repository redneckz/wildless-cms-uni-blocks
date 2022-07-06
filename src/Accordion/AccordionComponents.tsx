import type { LinkContent } from '../model/LinkContent';
import { Doc } from '../ui-kit/Doc';

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

const TextComponent = (data: string) => <p className="m-0">{data}</p>;

const ACCORDION_COMPONENTS = {
  Text: TextComponent,
  Docs: DocsComponent,
};

export default ACCORDION_COMPONENTS;
