// Just a draft objects
// TODO: Replace with async load from JSON
const tableRow1: CalculatorParams = {
  isSalaryEarner: true,
  isStateEmployee: true,
  isAnnuity: true,
  isInsurance: true,
  minSum: 30000,
  maxSum: 3000000,
  minMonths: 1,
  maxMonths: 84,
  rateWithAnnuity: 12,
  rateWithoutAnnuity: 16.5,
};

const tableRow2: CalculatorParams = {
  isSalaryEarner: false,
  isStateEmployee: true,
  isAnnuity: true,
  isInsurance: true,
  minSum: 15000,
  maxSum: 2500000,
  minMonths: 1,
  maxMonths: 84,
  rateWithAnnuity: 10,
  rateWithoutAnnuity: 14.5,
};

const tableRow3: CalculatorParams = {
  isSalaryEarner: true,
  isStateEmployee: false,
  isAnnuity: true,
  isInsurance: true,
  minSum: 50000,
  maxSum: 3000000,
  minMonths: 1,
  maxMonths: 84,
  rateWithAnnuity: 5,
  rateWithoutAnnuity: 11.5,
};

const tableRow4: CalculatorParams = {
  isSalaryEarner: true,
  isStateEmployee: true,
  isAnnuity: false,
  isInsurance: true,
  minSum: 100000,
  maxSum: 9000000,
  minMonths: 1,
  maxMonths: 84,
  rateWithAnnuity: 20,
  rateWithoutAnnuity: 25.5,
};

const tableRow5: CalculatorParams = {
  isSalaryEarner: true,
  isStateEmployee: true,
  isAnnuity: true,
  isInsurance: false,
  minSum: 60000,
  maxSum: 12000000,
  minMonths: 1,
  maxMonths: 84,
  rateWithAnnuity: 1,
  rateWithoutAnnuity: 4.5,
};

const tableRow6: CalculatorParams = {
  isSalaryEarner: false,
  isStateEmployee: false,
  isAnnuity: true,
  isInsurance: true,
  minSum: 35000,
  maxSum: 4500000,
  minMonths: 1,
  maxMonths: 84,
  rateWithAnnuity: 8,
  rateWithoutAnnuity: 18.5,
};

const tableRow7: CalculatorParams = {
  isSalaryEarner: false,
  isStateEmployee: true,
  isAnnuity: false,
  isInsurance: true,
  minSum: 60000,
  maxSum: 6000000,
  minMonths: 1,
  maxMonths: 84,
  rateWithAnnuity: 16,
  rateWithoutAnnuity: 14.5,
};

const tableRow8: CalculatorParams = {
  isSalaryEarner: false,
  isStateEmployee: true,
  isAnnuity: true,
  isInsurance: false,
  minSum: 70000,
  maxSum: 7000000,
  minMonths: 1,
  maxMonths: 84,
  rateWithAnnuity: 17,
  rateWithoutAnnuity: 17.5,
};

const tableRow9: CalculatorParams = {
  isSalaryEarner: true,
  isStateEmployee: false,
  isAnnuity: false,
  isInsurance: true,
  minSum: 80000,
  maxSum: 8000000,
  minMonths: 1,
  maxMonths: 84,
  rateWithAnnuity: 18,
  rateWithoutAnnuity: 18.5,
};

const tableRow10: CalculatorParams = {
  isSalaryEarner: true,
  isStateEmployee: false,
  isAnnuity: true,
  isInsurance: false,
  minSum: 90000,
  maxSum: 9000000,
  minMonths: 1,
  maxMonths: 84,
  rateWithAnnuity: 19,
  rateWithoutAnnuity: 19.5,
};

const tableRow11: CalculatorParams = {
  isSalaryEarner: true,
  isStateEmployee: true,
  isAnnuity: false,
  isInsurance: false,
  minSum: 100000,
  maxSum: 10000000,
  minMonths: 1,
  maxMonths: 84,
  rateWithAnnuity: 10,
  rateWithoutAnnuity: 10.5,
};

const tableRow12: CalculatorParams = {
  isSalaryEarner: false,
  isStateEmployee: false,
  isAnnuity: false,
  isInsurance: true,
  minSum: 110000,
  maxSum: 11000000,
  minMonths: 1,
  maxMonths: 84,
  rateWithAnnuity: 12,
  rateWithoutAnnuity: 11.5,
};

const tableRow13: CalculatorParams = {
  isSalaryEarner: false,
  isStateEmployee: true,
  isAnnuity: false,
  isInsurance: false,
  minSum: 120000,
  maxSum: 12000000,
  minMonths: 1,
  maxMonths: 84,
  rateWithAnnuity: 22,
  rateWithoutAnnuity: 22.5,
};

const tableRow14: CalculatorParams = {
  isSalaryEarner: false,
  isStateEmployee: false,
  isAnnuity: true,
  isInsurance: false,
  minSum: 130000,
  maxSum: 13000000,
  minMonths: 1,
  maxMonths: 84,
  rateWithAnnuity: 13,
  rateWithoutAnnuity: 16.5,
};

const tableRow15: CalculatorParams = {
  isSalaryEarner: false,
  isStateEmployee: false,
  isAnnuity: false,
  isInsurance: false,
  minSum: 140000,
  maxSum: 15000000,
  minMonths: 1,
  maxMonths: 84,
  rateWithAnnuity: 44,
  rateWithoutAnnuity: 44.5,
};

const tableRow16: CalculatorParams = {
  isSalaryEarner: true,
  isStateEmployee: true,
  isAnnuity: false,
  isInsurance: false,
  minSum: 150000,
  maxSum: 16000000,
  minMonths: 1,
  maxMonths: 84,
  rateWithAnnuity: 29,
  rateWithoutAnnuity: 29.5,
};

export const defaultTable: CalculatorParams[] = [
  tableRow1,
  tableRow2,
  tableRow3,
  tableRow4,
  tableRow5,
  tableRow6,
  tableRow7,
  tableRow8,
  tableRow9,
  tableRow10,
  tableRow11,
  tableRow12,
  tableRow13,
  tableRow14,
  tableRow15,
  tableRow16,
];

export interface CalculatorParams {
  isSalaryEarner?: boolean;
  isStateEmployee?: boolean;
  isAnnuity?: boolean;
  isInsurance?: boolean;
  minSum?: number;
  maxSum?: number;
  minMonths?: number;
  maxMonths?: number;
  rateWithAnnuity?: number;
  rateWithoutAnnuity?: number;
}

// TODO: Replace params with object?
export const getCalculatorParams = (
  tableRows: CalculatorParams[],
  isSalaryEarner: boolean,
  isStateEmployee: boolean,
  isAnnuity: boolean,
) => {
  const params = tableRows.find(
    (row) =>
      row.isSalaryEarner === isSalaryEarner &&
      row.isStateEmployee === isStateEmployee &&
      row.isAnnuity === isAnnuity,
  );

  if (!params) return {} as CalculatorParams;

  return params;
};

export const getCreditRate = (params: CalculatorParams, sum: number, insurance: boolean) => {
  if (Number(params.minSum) <= sum && Number(params.maxSum) >= sum) {
    if (insurance) {
      return params.rateWithAnnuity;
    } else {
      return params.rateWithoutAnnuity;
    }
  }
};

export type PaymentType = 'annuity' | 'differentiated';

// TODO: Replace params with object?
export const getMonthlyPayment = (
  paymentType: PaymentType,
  calculatorParams: CalculatorParams | undefined,
  sum: number,
  months: number,
  rate: number,
) => {
  if (!calculatorParams) return 0;

  if (paymentType === 'annuity') {
    const annuityCoef = Number(rate) / 1200;

    return sum * (annuityCoef + annuityCoef / (Math.pow(1 + annuityCoef, months - 1) - 1));
  } else {
    return sum / months + sum * (Number(rate) / 12);
  }
};
