import { CalculatorParams } from './CreditCalculatorContent';

interface GetCalculatorParamsParams {
  tableRows?: CalculatorParams[];
  isSalaryEarner?: boolean;
  isStateEmployee?: boolean;
  isAnnuity?: boolean;
}

export const getCalculatorParams = (params: GetCalculatorParamsParams) => {
  const { tableRows, isSalaryEarner = false, isStateEmployee = false, isAnnuity = false } = params;

  if (!tableRows) return {} as CalculatorParams;

  const calculatorParams = tableRows.find(
    (row) =>
      row.isSalaryEarner === isSalaryEarner &&
      row.isStateEmployee === isStateEmployee &&
      row.isAnnuity === isAnnuity,
  );

  if (!calculatorParams) return {} as CalculatorParams;

  return calculatorParams;
};
