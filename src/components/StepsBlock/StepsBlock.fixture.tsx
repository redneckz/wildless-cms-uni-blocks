import { context } from '../../setup-fixture';
import { StepsBlock } from './StepsBlock';
import { StepsBlock as StepsBlockMobile } from './StepsBlock.mobile';

const steps = [
  {
    label: 'Заявка на кредит',
    description: 'Оставьте онлайн-заявку на потребительский кредит',
  },
  {
    label: 'В случае одобрения',
    description: 'Менеджер свяжется с вами и согласует встречу',
  },
  {
    label: 'Получение наличных',
    description: 'Получите наличные в отделении банка',
  },
];

export default {
  default: (
    <div className="container grid grid-cols-12">
      <StepsBlock
        className="col-span-12"
        context={context}
        title="Рассчитайте условия на онлайн-калькуляторе и оставьте заявку на потребительский кредит"
        steps={steps}
      />
    </div>
  ),
  mobile: (
    <StepsBlockMobile
      context={context}
      title="Рассчитайте условия на онлайн-калькуляторе и оставьте заявку на потребительский кредит"
      description="Откройте мультивалютный вклад, чтобы распределить свои вложения"
      size="normal"
      steps={steps}
    />
  ),
  'mobile only desc': (
    <StepsBlockMobile
      context={context}
      description="Откройте мультивалютный вклад, чтобы распределить свои вложения"
      size="normal"
      steps={steps}
    />
  ),

  'mobile small': (
    <StepsBlockMobile
      context={context}
      title="Рассчитайте условия на онлайн-калькуляторе и оставьте заявку на потребительский кредит"
      size="small"
      steps={steps}
    />
  ),

  'mobile small multi-options': (
    <StepsBlockMobile
      context={context}
      title="Рассчитайте условия на онлайн-калькуляторе и оставьте заявку на потребительский кредит"
      description="Откройте мультивалютный вклад, чтобы распределить свои вложения"
      size="small"
      steps={[
        {
          description: 'Оставьте онлайн-заявку на потребительский кредит',
          icon: 'ClockIcon',
        },
        {
          label: 'В случае одобрения',
          icon: 'SignDocsIcon',
        },
        {
          label: 'Заявка на кредит',
          description: 'Оставьте онлайн-заявку на потребительский кредит',
          icon: 'ComfortableCompIcon',
        },
        {
          label: 'Получение наличных',
          icon: 'ClockIcon',
        },
      ]}
    />
  ),

  'mobile small icons': (
    <StepsBlockMobile
      context={context}
      title="Рассчитайте условия на онлайн-калькуляторе и оставьте заявку на потребительский кредит"
      size="small"
      steps={[
        {
          label: 'Заявка на кредит',
          icon: 'EmptyWalletIcon',
        },
        {
          label: 'В случае одобрения',
          icon: 'PercentageSquareIcon',
        },
        {
          label: 'Получение наличных',
          icon: 'CalendarIcon',
        },
      ]}
    />
  ),
};
