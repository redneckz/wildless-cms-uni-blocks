import { CreditCalculator } from './CreditCalculator';
import { context } from '../../setup-fixture';

export default (
  <div className="container grid grid-cols-12">
    <CreditCalculator
      className="col-span-12"
      context={context}
      directoryName="credit-calculator-data"
    />
  </div>
);
