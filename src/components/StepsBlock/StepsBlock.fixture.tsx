import { context } from '../../setup-fixture';
import { StepsBlock } from './StepsBlock';

export default (
  <div className="container grid grid-cols-12">
    <StepsBlock
      className="col-span-12"
      context={context}
      title="Рассчитайте условия на онлайн-калькуляторе и оставьте заявку на потребительский кредит"
      steps={[
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
      ]}
    />
  </div>
);
