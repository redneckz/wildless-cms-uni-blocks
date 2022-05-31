import { context } from './setup-fixture';

import { StepsBlock } from './StepsBlock';

export default (
  <StepsBlock
    context={context}
    title="Рассчитайте условия на онлайн-калькуляторе и оставьте заявку на потребительский кредит"
    steps={[
      {
        label: 'Заявка на кредит',
        description: 'Оставьте онлайн-заявку на потребительский кредит',
        icon: 'NewDocIcon',
      },
      {
        label: 'В случае одобрения',
        description: 'Менеджер свяжется с вами и согласует встречу',
        icon: 'PassSendIcon',
      },
      {
        label: 'Получение наличных',
        description: 'Получите наличные в отделении банка',
        icon: 'ActualBalanceIcon',
      },
    ]}
  />
);
