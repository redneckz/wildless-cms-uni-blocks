import { CalculatorParams, PaymentType } from './CreditCalculatorContent';

interface GetCalculatorParamsProps {
  tableRows?: CalculatorParams[];
  isSalaryEarner?: boolean;
  isStateEmployee?: boolean;
  isAnnuity?: boolean;
}

// TODO: Replace params with object?
export const getCalculatorParams = (props: GetCalculatorParamsProps) => {
  const { tableRows, isSalaryEarner = false, isStateEmployee = false, isAnnuity = false } = props;

  if (!tableRows) return {} as CalculatorParams;

  const params = tableRows.find(
    (row) =>
      row.isSalaryEarner === isSalaryEarner &&
      row.isStateEmployee === isStateEmployee &&
      row.isAnnuity === isAnnuity,
  );

  if (!params) return {} as CalculatorParams;

  return params;
};

export const getCreditRate = (params: CalculatorParams, sum: number, insurance: boolean) => {
  if (Number(params.minSum) <= sum && Number(params.maxSum) >= sum) {
    if (insurance) {
      return params.rateWithAnnuity;
    } else {
      return params.rateWithoutAnnuity;
    }
  }
};

// TODO: Replace params with object?
export const getMonthlyPayment = (
  paymentType: PaymentType,
  calculatorParams: CalculatorParams | undefined,
  sum: number,
  months: number,
  rate: number,
) => {
  if (!calculatorParams) return 0;

  if (paymentType === 'annuity') {
    const annuityCoef = Number(rate) / 1200;

    return sum * (annuityCoef + annuityCoef / (Math.pow(1 + annuityCoef, months - 1) - 1));
  } else {
    return sum / months + sum * (Number(rate) / 12);
  }
};
