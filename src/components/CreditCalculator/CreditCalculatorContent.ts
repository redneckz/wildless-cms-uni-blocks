export interface CalculatorParams {
  isSalaryEarner?: boolean;
  isStateEmployee?: boolean;
  isAnnuity?: boolean;
  isInsurance?: boolean;
  minSum?: number;
  maxSum?: number;
  minMonths?: number;
  maxMonths?: number;
  rateWithAnnuity?: number;
  rateWithoutAnnuity?: number;
}

export interface CreditCalculatorData {
  rows?: CalculatorParams[];
}
