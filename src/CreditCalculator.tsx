import { JSX } from '@redneckz/uni-jsx';
import { UniBlockProps } from './types';
import { Button } from './ui-kit/Button';
import { Checkbox } from './ui-kit/Checkbox';
import { InputRange } from './ui-kit/InputRange';

export interface CreditCalculatorProps extends UniBlockProps {}

const borderStyle = 'border-solid border-3 border-primary-main rounded-md';

export const CreditCalculator = JSX<CreditCalculatorProps>(({ context, className }) => {
  const [moneyValue, setMoneyValue] = context.useState(350000);
  const [monthsValue, setMonthsValue] = context.useState(12);
  const [isAnnuityChecked, setIsAnnuityChecked] = context.useState(true);
  const [isInsuranceChecked, setIsInsuranceChecked] = context.useState(true);

  return (
    <section className={`font-sans text-primary-text bg-white p-4 ${className}`}>
      <div
        className={`w-[848px] box-border p-12 flex flex-col justify-between ${borderStyle}`}
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex">
          <div className="min-w-[471px] mr-11">
            <InputRange
              title="Желаемая сумма кредита, ₽"
              items={['От 50 000 рублей', 'До 3 000 000 рублей']}
              min={50000}
              max={3000000}
              step={50000}
              value={moneyValue}
              onChange={setMoneyValue}
            />
            <InputRange
              title="Срок кредита, месяцев"
              items={['Или выберите из предложенных вариантов ниже']}
              min={1}
              max={84}
              step={1}
              value={monthsValue}
              onChange={setMonthsValue}
            />
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
            <div className="text-[35px] mb-3">26 827 ₽</div>
            <div className="text-sm opacity-60">Ставка</div>
            <div className="text-[35px]">16,9 %</div>
          </div>
        </div>
        <div className="flex items-center">
          {/* TODO: This button - <a />, need to replace with <button /> */}
          <Button className="mr-3" text="Отправить заявку" href="#" />
          <div className="max-w-[307px] text-xxs leading-4 text-secondary-text">
            Отправляя заявку, вы соглашаетесь на обработку персональных данных соответственно
            требованиям ФЗ «О персональных данных»
          </div>
        </div>
      </div>
    </section>
  );
});
