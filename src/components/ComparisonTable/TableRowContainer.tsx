import { JSX } from '@redneckz/uni-jsx';

export const TableRowContainer = JSX(({ children }) => (
  <div className="self-start flex flex-col" role="row">
    <div className="flex">{children}</div>
  </div>
));
