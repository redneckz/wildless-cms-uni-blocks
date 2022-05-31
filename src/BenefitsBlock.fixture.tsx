import { context } from './setup-fixture';

import { AdvantagesBlock } from './BenefitsBlock';

export default (
  <AdvantagesBlock
    context={context}
    title="Преимущества кредита"
    benefits={[
      {
        label: 'Без комиссии',
        description:
          'Комиссия за выдачу кредита не взимается. Допускается полное или частичное погашение кредита',
        icon: 'ClockIcon',
      },
      {
        label: 'Оформление по паспорту',
        description: 'Обеспечение не требуется. Кредит можно получить на любые цели',
        icon: 'SignDocsIcon',
      },
      {
        label: 'Без залога и поручительства',
        description:
          'Единовременное перечисление суммы кредита в полном объёме на текущий счет в Банке',
        icon: 'ComfortableCompIcon',
      },
      {
        label: 'Деньги за 3 дня',
        description: 'Рассмотрение заявки с момента предоставления полного комплекта документов',
        icon: 'ActualBalanceIcon',
      },
    ]}
  />
);
