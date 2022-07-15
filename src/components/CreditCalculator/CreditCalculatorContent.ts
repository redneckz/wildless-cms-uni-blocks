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

/**
 * @title Кредитный калькулятор
 */
export interface CreditCalculatorContent {
  /** @title Справочник */
  directoryName?: string;
}
