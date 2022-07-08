import { JSX } from '@redneckz/uni-jsx';
import { useCreditCalculatorData } from '../../hooks/useCreditCalculatorData';
import { UniBlockProps } from '../../types';
import { Button } from '../../ui-kit/Button/Button';
import { Checkbox } from '../../ui-kit/Checkbox/Checkbox';
import { InputRange } from '../../ui-kit/InputRange/InputRange';
import { addSpacesBetweenNumbers } from '../../utils/addSpacesBetweenNumber';
import { clamp } from '../../utils/clamp';
import {
  DEFAULT_MAX_MONTHS,
  DEFAULT_MIN_MONTHS,
  DEFAULT_PAYMENT_TYPE,
  MONTHS_IN_YEAR,
  STEP_MONEY,
  STEP_MONTHS,
} from './constants';
import { getCalculatorParams } from './getCalculatorParams';
import { getCreditRate } from './getCreditRate';
import { getCreditTermYears } from './getCreditTermYears';
import { getMonthlyPayment } from './getMonthlyPayment';

export interface CreditCalculatorProps extends UniBlockProps {}

const borderStyle = 'border-solid border-3 border-primary-main rounded-md';

export const CreditCalculator = JSX<CreditCalculatorProps>(({ context, className }) => {
  const [moneyValue, setMoneyValue] = context.useState(350000);
  const [monthsValue, setMonthsValue] = context.useState(12);
  const [isAnnuityChecked, setIsAnnuityChecked] = context.useState(true);
  const [isInsuranceChecked, setIsInsuranceChecked] = context.useState(true);

  const tableRows = useCreditCalculatorData(context.useAsyncData).rows;

  const calculatorParams = getCalculatorParams({ tableRows, isAnnuity: isAnnuityChecked });

  const rate = getCreditRate({ calculatorParams, isInsurance: isInsuranceChecked });

  const montlyPayment = getMonthlyPayment({
    calculatorParams,
    paymentType: DEFAULT_PAYMENT_TYPE,
    rate,
    sum: moneyValue,
    months: monthsValue,
  });

  const creditTermYears = getCreditTermYears(
    calculatorParams.minMonths || DEFAULT_MIN_MONTHS,
    calculatorParams.maxMonths || DEFAULT_MAX_MONTHS,
  );

  function handleButtonClick(value: number) {
    setMonthsValue(
      clamp(
        value * MONTHS_IN_YEAR,
        calculatorParams?.minMonths || DEFAULT_MIN_MONTHS,
        calculatorParams?.maxMonths || DEFAULT_MAX_MONTHS,
      ),
    );
  }

  return (
    <section className={`font-sans text-primary-text bg-white p-4 ${className}`}>
      <div className={`box-border p-12 flex flex-col justify-between ${borderStyle}`}>
        <div className="flex justify-between">
          <div className="grow mr-11">
            <InputRange
              title="Желаемая сумма кредита, ₽"
              items={[
                `От ${addSpacesBetweenNumbers(String(calculatorParams.minSum))} рублей`,
                `До ${addSpacesBetweenNumbers(String(calculatorParams.maxSum))} рублей`,
              ]}
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
              {creditTermYears.map((number, i) => renderButton(number, i, handleButtonClick))}
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
            <div className="text-lg mb-3">
              {addSpacesBetweenNumbers(montlyPayment.toFixed(0))} ₽
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
            требованиям ФЗ «О персональных данных»
          </div>
        </div>
      </div>
    </section>
  );
});

function renderButton(number: number, i: number, handleClick: (number: number) => void) {
  return (
    <div
      key={String(i)}
      className="bg-secondary-light rounded-3xl h-10 w-[75px] box-border mr-2 flex items-center justify-center cursor-pointer"
      role="button"
      onClick={() => handleClick(number)}
    >
      <span className="font-medium text-sm">
        {number} {number === 1 ? 'год' : number > 4 ? 'лет' : 'года'}
      </span>
    </div>
  );
}
