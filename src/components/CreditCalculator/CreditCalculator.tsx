import { JSX } from '@redneckz/uni-jsx';
import { useCreditCalculatorData } from '../../hooks/useCreditCalculatorData';
import { UniBlockProps } from '../../types';
import { Button } from '../../ui-kit/Button/Button';
import { Checkbox } from '../../ui-kit/Checkbox/Checkbox';
import { InputRange } from '../../ui-kit/InputRange/InputRange';
import { clamp } from '../../utils/clamp';
import { getCalculatorParams, getCreditRate, getMonthlyPayment } from './utils';

export interface CreditCalculatorProps extends UniBlockProps {}

const borderStyle = 'border-solid border-3 border-primary-main rounded-md';

// Not used yet
const MIN_MONEY = 50000;
const MAX_MONEY = 3000000;
const STEP_MONEY = 1000;

const CREDIT_TERM_YEARS = [2, 3, 4, 5, 6, 7];

const MIN_MONTHS = 1;
const MAX_MONTHS = 84;
const STEP_MONTHS = 1;

const MONTHS_IN_YEAR = 12;

export const CreditCalculator = JSX<CreditCalculatorProps>(({ context, className }) => {
  const [moneyValue, setMoneyValue] = context.useState(350000);
  const [monthsValue, setMonthsValue] = context.useState(12);
  const [isAnnuityChecked, setIsAnnuityChecked] = context.useState(true);
  const [isInsuranceChecked, setIsInsuranceChecked] = context.useState(true);

  const tableRows = useCreditCalculatorData(context.useAsyncData).rows;

  const calculatorParams = getCalculatorParams({ tableRows, isAnnuity: isAnnuityChecked });

  const rate = getCreditRate(calculatorParams, moneyValue, isInsuranceChecked);

  const montlyPayment = getMonthlyPayment(
    'annuity',
    calculatorParams,
    moneyValue,
    monthsValue,
    rate || 0,
  );

  const handleButtonClick = (value: number) => {
    setMonthsValue(
      clamp(
        value * MONTHS_IN_YEAR,
        calculatorParams?.minMonths || MIN_MONTHS,
        calculatorParams?.maxMonths || MAX_MONTHS,
      ),
    );
  };

  return (
    <section className={`font-sans text-primary-text bg-white p-4 ${className}`}>
      <div className={`box-border p-12 flex flex-col justify-between ${borderStyle}`}>
        <div className="flex justify-between">
          <div className="grow mr-11">
            <InputRange
              title="Желаемая сумма кредита, ₽"
              items={['От 50 000 рублей', 'До 3 000 000 рублей']}
              min={calculatorParams?.minSum}
              max={calculatorParams?.maxSum}
              step={STEP_MONEY}
              value={moneyValue}
              onChange={setMoneyValue}
            />
            <InputRange
              title="Срок кредита, месяцев"
              items={['Или выберите из предложенных вариантов ниже']}
              min={calculatorParams?.minMonths}
              max={calculatorParams?.maxMonths}
              step={STEP_MONTHS}
              value={monthsValue}
              onChange={setMonthsValue}
            />
            <div className="flex mb-7">
              {CREDIT_TERM_YEARS.map((number, i) => renderButton(number, i, handleButtonClick))}
            </div>
            <Checkbox
              text="Получаю пенсию на карту Россельхозбанка"
              checked={isAnnuityChecked}
              onChange={setIsAnnuityChecked}
            />
            <Checkbox
              className="mb-4"
              text="Комплексная страховая защита"
              checked={isInsuranceChecked}
              onChange={setIsInsuranceChecked}
            />
          </div>
          <div className="p-9 bg-primary-main rounded-md text-white">
            <div className="text-base mb-5">Наше предложение</div>
            <div className="text-sm opacity-60">Ежемесячный платёж</div>
            <div className="text-lg mb-3">{montlyPayment.toFixed(0)} ₽</div>
            <div className="text-sm opacity-60">Ставка</div>
            <div className="text-lg">{rate} %</div>
          </div>
        </div>
        <div className="flex items-center">
          <Button className="mr-3" text="Отправить заявку" version="primary" href="#" />
          <div
            className="w-80 text-xxs leading-4 text-secondary-text"
            aria-label="Соглашение на обработку персональных данных"
          >
            Отправляя заявку, вы соглашаетесь на обработку персональных данных соответственно
            требованиям ФЗ «О персональных данных»
          </div>
        </div>
      </div>
    </section>
  );
});

const renderButton = (number: number, i: number, handleClick: (number: number) => void) => (
  <div
    key={String(i)}
    className="bg-secondary-light rounded-3xl h-10 w-[75px] box-border mr-2 flex items-center justify-center cursor-pointer"
    role="button"
    onClick={() => handleClick(number)}
  >
    <span className="font-medium text-sm">
      {number} {number > 4 ? 'лет' : 'года'}
    </span>
  </div>
);
