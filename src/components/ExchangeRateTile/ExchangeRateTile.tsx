import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import type { ButtonProps } from '../../ui-kit/Button/ButtonProps';
import { Icon } from '../../ui-kit/Icon/Icon';
import { Tile } from '../Tile/Tile';
import type { ExchangeRateTileContent } from './ExchangeRateTileContent';

export interface ExchangeRateTileProps extends ExchangeRateTileContent, UniBlockProps {}

const CBR_EXCHANGE_RATE_URL = 'https://www.cbr-xml-daily.ru/daily_json.js';

const CURRENCY_CODES = ['USD', 'EUR'];
const CURRENCY_ICONS_MAP = {
  USD: 'DollarIcon',
  EUR: 'EuroIcon',
};

const buttons: ButtonProps[] = [
  {
    text: 'Все показатели',
    href: 'https://cbr.ru/currency_base/daily/',
    version: 'secondary',
  },
];

export const ExchangeRateTile = JSX<ExchangeRateTileProps>(({ className, context, title }) => {
  const { data } = context.useAsyncData(CBR_EXCHANGE_RATE_URL, fetchExchangeRate);
  return (
    <Tile
      className={className}
      context={context}
      title={title || 'Курсы обмена валют'}
      buttons={buttons}
    >
      <table>
        <thead>
          <tr>
            <CurrencyTH>Валюта</CurrencyTH>
            <CurrencyTH className="pl-11">Курс</CurrencyTH>
          </tr>
        </thead>
        <tbody>
          {CURRENCY_CODES.map((code) => {
            const value = (data?.Valute || {})[code]?.Value;
            return (
              <tr key={code}>
                <CurrencyTD className="pt-4">
                  <div className="flex items-center">
                    <Icon name={CURRENCY_ICONS_MAP[code]} width="24" height="24" />
                    <span className="ml-2">{code}</span>
                  </div>
                </CurrencyTD>
                <CurrencyTD className="pt-4 pl-11">{formatCurrency(value)}</CurrencyTD>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Tile>
  );
});

const CurrencyTH = JSX<{ className?: string }>(({ className = '', children }) => (
  <th className={`text-left font-normal text-sm text-secondary-text ${className}`}>{children}</th>
));

const CurrencyTD = JSX<{ className?: string }>(({ className = '', children }) => (
  <td className={`text-left font-normal text-base text-primary-text ${className}`}>{children}</td>
));

async function fetchExchangeRate(): Promise<{
  Valute?: Record<string, { CharCode: string; Name?: string; Value: number; Previous?: number }>;
}> {
  const response = await fetch(CBR_EXCHANGE_RATE_URL);
  return await response.json();
}

const currencyNumberFormat = new Intl.NumberFormat('ru', { style: 'currency', currency: 'RUB' });

const formatCurrency = (value?: number) => (value ? currencyNumberFormat.format(value) : '');
