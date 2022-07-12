import type { AsyncDataHook } from '../components/ContentPage/ContentPageContext';
import { CreditCalculatorData } from '../components/CreditCalculator/CreditCalculatorContent';

export function useCreditCalculatorData(
  useAsyncData: AsyncDataHook,
  directoryName: string | undefined,
): CreditCalculatorData {
  const { data } = useAsyncData(creditCalculatorUrl(directoryName), () =>
    fetchCreditCalculatorData(directoryName),
  );
  return data || {};
}

async function fetchCreditCalculatorData(
  directoryName: string | undefined,
): Promise<CreditCalculatorData> {
  const response = await fetch(creditCalculatorUrl(directoryName));
  return await response.json();
}

function creditCalculatorUrl(directoryName: string | undefined) {
  return `/wcms-resources/${directoryName || 'credit-calculator-data'}.json`;
}
