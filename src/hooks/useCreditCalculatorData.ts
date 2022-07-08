import type { AsyncDataHook } from '../components/ContentPage/ContentPageContext';
import { CreditCalculatorData } from '../components/CreditCalculator/CreditCalculatorContent';
import { projectSettings } from '../ProjectSettings';

export function useCreditCalculatorData(useAsyncData: AsyncDataHook): CreditCalculatorData {
  const { data } = useAsyncData(creditCalculatorUrl(), fetchCreditCalculatorData);
  return data || {};
}

async function fetchCreditCalculatorData(): Promise<CreditCalculatorData> {
  const response = await fetch(creditCalculatorUrl());
  return await response.json();
}

function creditCalculatorUrl() {
  return `/wcms-resources/${projectSettings.CREDIT_CALCULATOR || 'credit-calculator-data'}.json`;
}
