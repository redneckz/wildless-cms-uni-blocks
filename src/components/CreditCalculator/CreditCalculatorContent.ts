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

export type PaymentType = 'annuity' | 'differentiated';

export interface CreditCalculatorData {
  rows?: CalculatorParams[];
}
