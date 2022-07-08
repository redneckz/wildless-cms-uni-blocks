import { DEFAULT_RATE } from './constants';
import { CalculatorParams } from './CreditCalculatorContent';

interface GetCreditRateParams {
  calculatorParams?: CalculatorParams;
  isInsurance: boolean;
}

export const getCreditRate = (params: GetCreditRateParams) => {
  const { calculatorParams, isInsurance } = params;

  if (!calculatorParams) return DEFAULT_RATE;

  return isInsurance
    ? calculatorParams?.rateWithAnnuity || DEFAULT_RATE
    : calculatorParams?.rateWithoutAnnuity || DEFAULT_RATE;
};
