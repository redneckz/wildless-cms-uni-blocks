import { JSX } from '@redneckz/uni-jsx';
import { Tile } from './Tile';
import type { UniBlocksComponentProps } from './types';
import { ButtonProps } from './ui-kit/Button';

export interface ExchangeRateTileContent {
  title?: string;
}

export interface ExchangeRateTileProps extends ExchangeRateTileContent, UniBlocksComponentProps {}

const CBR_EXCHANGE_RATE_URL = 'https://www.cbr-xml-daily.ru/daily_json.js';

const button: ButtonProps = {
  text: 'Все показатели',
  href: 'https://cbr.ru/currency_base/daily/',
};

export const ExchangeRateTile = JSX<ExchangeRateTileProps>(({ className, context }) => {
  const { data } = context.useAsyncData(CBR_EXCHANGE_RATE_URL, fetchExchangeRate);
  return (
    <Tile className={className} context={context} title="Курсы обмена валют" button={button}>
      <table className="max-w-[600px] mt-4">
        <thead>
          <tr>
            {renderTHeadItem('Валюта')}
            {renderTHeadItem('Купить', 'pl-11')}
            {renderTHeadItem('Продать', 'pl-11')}
          </tr>
        </thead>
        <tbody>
          {['USD', 'EUR'].map((key) => {
            const value = (data?.Valute || {})[key]?.Value;
            return (
              <tr key={key}>
                {renderTBodyItem(key, 'pt-4')}
                {renderTBodyItem(formatCurrency(value), 'pl-11 pt-4')}
                {renderTBodyItem(value ? formatCurrency(value - 1) : '', 'pl-11 pt-4')}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Tile>
  );
});

const renderTHeadItem = (title: string, className: string = '') => (
  <th className={`text-left font-normal text-sm text-secondary-text ${className}`}>{title}</th>
);

const renderTBodyItem = (text: string, className: string = '') => (
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
