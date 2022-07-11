export interface CalculatorParams {
  isAnnuity?: boolean;
  minSum?: number;
  maxSum?: number;
  minMonths?: number;
  maxMonths?: number;
  rateWithInsurance?: number;
  rateWithoutInsurance?: number;
}

export interface CreditCalculatorData {
  rows?: CalculatorParams[];
}

export interface CreditCalculatorContent {
  directoryName?: string;
}
