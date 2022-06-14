import { JSX } from '@redneckz/uni-jsx';
import { Tile } from './Tile';
import type { UniBlockProps } from './types';
import { ButtonProps } from './ui-kit/Button';

export interface ExchangeRateTileContent {
  title?: string;
}

export interface ExchangeRateTileProps extends ExchangeRateTileContent, UniBlockProps {}

const CBR_EXCHANGE_RATE_URL = 'https://www.cbr-xml-daily.ru/daily_json.js';

const CURRENCIES_LIST = ['USD', 'EUR'];

const button: ButtonProps = {
  text: 'Все показатели',
  href: 'https://cbr.ru/currency_base/daily/',
};

export const ExchangeRateTile = JSX<ExchangeRateTileProps>(({ className, context, title }) => {
  const { data } = context.useAsyncData(CBR_EXCHANGE_RATE_URL, fetchExchangeRate);
  return (
    <Tile
      className={className}
      context={context}
      title={title || 'Курсы обмена валют'}
      button={button}
    >
      <table>
        <thead>
          <tr>
            {renderTH('Валюта')}
            {renderTH('Курс', 'pl-11')}
          </tr>
        </thead>
        <tbody>
          {CURRENCIES_LIST.map((key) => {
            const value = (data?.Valute || {})[key]?.Value;
            return (
              <tr key={key}>
                {renderTD(key, 'pt-4')}
                {renderTD(formatCurrency(value), 'pl-11 pt-4')}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Tile>
  );
});

const renderTH = (title: string, className: string = '') => (
  <th className={`text-left font-normal text-sm text-secondary-text ${className}`}>{title}</th>
);

const renderTD = (text: string, className: string = '') => (
  <td className={`text-left font-normal text-base text-primary-text ${className}`}>{text}</td>
);

async function fetchExchangeRate(): Promise<{
  Valute?: Record<string, { CharCode: string; Name?: string; Value: number; Previous?: number }>;
}> {
  const response = await fetch(CBR_EXCHANGE_RATE_URL);
  return await response.json();
}

const currencyNumberFormat = new Intl.NumberFormat('ru', { style: 'currency', currency: 'RUB' });

const formatCurrency = (value?: number) => (value ? currencyNumberFormat.format(value) : '');
