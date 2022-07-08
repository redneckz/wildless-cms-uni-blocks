import { clamp } from '../../utils/clamp';
import { CalculatorParams } from './CreditCalculatorContent';

type PaymentType = 'annuity' | 'differentiated';

interface GetMonthlyPaymentParams {
  calculatorParams?: CalculatorParams;
  paymentType: PaymentType;
  rate: number;
  sum: number;
  months: number;
}

const DEFAULT_MIN_SUM = 30000;
const DEFAULT_MAX_SUM = 3000000;

export const getMonthlyPayment = (params: GetMonthlyPaymentParams) => {
  const { calculatorParams, paymentType, rate, sum, months } = params;

  if (!calculatorParams) return 0;

  const finalSum = clamp(
    sum,
    calculatorParams.minSum || DEFAULT_MIN_SUM,
    calculatorParams.maxSum || DEFAULT_MAX_SUM,
  );

  if (paymentType === 'annuity') {
    const annuityCoef = Number(rate) / 1200;
    return finalSum * (annuityCoef + annuityCoef / (Math.pow(1 + annuityCoef, months - 1) - 1));
  } else {
    return finalSum / months + finalSum * (Number(rate) / 12);
  }
};
