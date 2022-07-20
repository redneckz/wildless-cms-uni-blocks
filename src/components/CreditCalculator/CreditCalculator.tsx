import { JSX } from '@redneckz/uni-jsx';
import { useCreditCalculatorData } from '../../hooks/useCreditCalculatorData';
import { UniBlockProps } from '../../types';
import { Button } from '../../ui-kit/Button/Button';
import { Checkbox } from '../../ui-kit/Checkbox/Checkbox';
import { InputRange } from '../../ui-kit/InputRange/InputRange';
import { addSpacesBetweenNumbers } from '../../utils/addSpacesBetweenNumbers';
import { clamp } from '../../utils/clamp';
import {
  DEFAULT_MAX_MONTHS,
  DEFAULT_MAX_SUM,
  DEFAULT_MIN_MONTHS,
  DEFAULT_MIN_SUM,
  DEFAULT_MONTHS,
  DEFAULT_SUM,
  MONTHS_IN_YEAR,
} from './constants';
import { CreditCalculatorContent } from './CreditCalculatorContent';
import { getCalculatorParams } from './getCalculatorParams';
import { getCreditRate } from './getCreditRate';
import { getCreditTermYears } from './getCreditTermYears';
import { getMonthlyPayment } from './getMonthlyPayment';

export interface CreditCalculatorProps extends CreditCalculatorContent, UniBlockProps {}

const STEP_MONEY = 1000;
const STEP_MONTHS = 1;
const DEFAULT_PAYMENT_TYPE = 'annuity';

const borderStyle = 'border-solid border-3 border-primary-main rounded-md';

export const CreditCalculator = JSX<CreditCalculatorProps>(
  ({ context, className, directoryName }) => {
    const [moneyValue, setMoneyValue] = context.useState<number | undefined>(undefined);
    const [monthsValue, setMonthsValue] = context.useState<number | undefined>(undefined);
    const [isAnnuityChecked, setIsAnnuityChecked] = context.useState(true);
    const [isInsuranceChecked, setIsInsuranceChecked] = context.useState(true);

    const tableRows = useCreditCalculatorData(context.useAsyncData, directoryName).rows;

    const calculatorParams = getCalculatorParams({ tableRows, isAnnuity: isAnnuityChecked });

    const defaultSum =
      calculatorParams.maxSum && calculatorParams.minSum
        ? (calculatorParams.maxSum - calculatorParams.minSum) / 2
        : DEFAULT_SUM;

    const defaultMonths =
      calculatorParams.maxMonths && calculatorParams.minMonths
        ? Math.round((calculatorParams.maxMonths - calculatorParams.minMonths) / 2)
        : DEFAULT_MONTHS;

    const minSum = calculatorParams?.minSum || DEFAULT_MIN_SUM;
    const maxSum = calculatorParams?.maxSum || DEFAULT_MAX_SUM;
    const minMonths = calculatorParams?.minMonths || DEFAULT_MIN_MONTHS;
    const maxMonths = calculatorParams?.maxMonths || DEFAULT_MAX_MONTHS;

    const rate = getCreditRate({ calculatorParams, isInsurance: isInsuranceChecked });

    const montlyPayment = getMonthlyPayment({
      calculatorParams,
      paymentType: DEFAULT_PAYMENT_TYPE,
      rate,
      sum: moneyValue || defaultSum,
      months: monthsValue || defaultMonths,
    });

    const creditTermYears = getCreditTermYears(minMonths, maxMonths);

    function handleButtonClick(value: number) {
      setMonthsValue(clamp(value * MONTHS_IN_YEAR, minMonths, maxMonths));
    }

    return (
      <section className={`font-sans text-primary-text bg-white p-4 w-[847px] ${className}`}>
        <div
          className={`box-border p-[49px] pr-[53px] flex flex-col justify-between ${borderStyle}`}
        >
          <div className="flex justify-between ">
            <div className="grow mr-[42px] w-[465px]">
              <InputRange
                title="Желаемая сумма кредита, ₽"
                items={[
                  `От ${addSpacesBetweenNumbers(minSum)} рублей`,
                  `До ${addSpacesBetweenNumbers(maxSum)} рублей`,
                ]}
                min={minSum}
                max={maxSum}
                step={STEP_MONEY}
                value={moneyValue || defaultSum}
                onChange={setMoneyValue}
              />
              <InputRange
                className="mt-[23px]"
                title="Срок кредита, месяцев"
                items={['Или выберите из предложенных вариантов ниже']}
                min={minMonths}
                max={maxMonths}
                step={STEP_MONTHS}
                value={monthsValue || defaultMonths}
                onChange={setMonthsValue}
              />
              <div className="flex mb-7">
                {creditTermYears.map((number, i) => renderButton(number, i, handleButtonClick))}
              </div>
              <Checkbox
                text="Получаю пенсию на карту Россельхозбанка"
                checked={isAnnuityChecked}
                onChange={setIsAnnuityChecked}
              />
              <Checkbox
                className="mt-3 mb-7"
                text="Комплексная страховая защита"
                checked={isInsuranceChecked}
                onChange={setIsInsuranceChecked}
              />
            </div>
            <div className="basis-[226px] shrink-0 box-border h-fit p-9 bg-primary-main rounded-md text-white">
              <div className="text-base mb-[18px]">Наше предложение</div>
              <div className="text-sm opacity-60">Ежемесячный платёж</div>
              <div className="text-lg mb-3">
                {addSpacesBetweenNumbers(Math.round(montlyPayment))} ₽
              </div>
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
              требованиям ФЗ «О персональных данных»
            </div>
          </div>
        </div>
      </section>
    );
  },
);

function renderButton(number: number, i: number, handleClick: (number: number) => void) {
  return (
    <button
      key={String(i)}
      className="bg-secondary-light rounded-3xl h-10 w-[75px] box-border mr-2 flex items-center justify-center cursor-pointer border-none"
      onClick={() => handleClick(number)}
    >
      <span className="font-semibold text-sm">
        {number} {number === 1 ? 'год' : number > 4 ? 'лет' : 'года'}
      </span>
    </button>
  );
}
