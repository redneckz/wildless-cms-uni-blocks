import { context } from '../../setup-fixture';
import { StepsBlock } from './StepsBlock';
import type { Step } from './StepsBlockContent';
import { IconName } from '../../ui-kit/Icon/IconProps';

const title =
  'Рассчитайте условия на онлайн-калькуляторе и оставьте заявку на потребительский кредит';

const steps: Step[] = [
  {
    label: 'Заявка на кредит',
    description: 'Оставьте онлайн-заявку\nна потребительский кредит',
  },
  {
    label: 'В случае одобрения',
    description: 'Менеджер свяжется с вами\nи согласует встречу',
  },
  {
    label: 'Получение наличных',
    description: 'Получите наличные\nв отделении банка',
  },
];

const hybridStepHeadings: Step[] = [
  {
    label: 'Заявка на кредит',
    description: 'Оставьте онлайн-заявку\nна потребительский кредит',
  },
  {
    label: 'В случае одобрения',
  },
  {
    description: 'Получите наличные\nв отделении банка',
  },
];

const icons: IconName[] = ['MoneyIcon', 'UserIcon', 'DocIcon'];

const iconSteps: Step[] = steps.map((item, i) => ({ ...item, icon: icons[i] }));

export default {
  default: <StepsBlock context={context} title={title} steps={steps} />,
  '2 steps': <StepsBlock context={context} title={title} steps={steps.slice(0, 2)} />,
  'no lines': <StepsBlock context={context} title={title} steps={steps} showLines={false} />,
  'hybrid step headings': <StepsBlock context={context} title={title} steps={hybridStepHeadings} />,
  'with icons': <StepsBlock context={context} title={title} steps={iconSteps} />,
  'no heading': <StepsBlock context={context} steps={steps} />,
};
