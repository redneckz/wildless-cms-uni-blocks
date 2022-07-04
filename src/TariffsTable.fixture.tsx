import { context } from "./setup-fixture";
import { TariffsTable } from "./TariffsTable";

// export default (
//   <TariffsTable
//     context={context}
//     icon="ShieldTickIcon"
//     advantage="advantage es number 1"
//     description={{
//       content: "text",
//       items:
//         [
//           { header: "header 1", desc: "desc 1" },
//           { header: "header 2", desc: "desc 2" },
//           { header: "header 3", desc: "desc 3" }
//         ]
//     }}
//   />
// );

const ROWS = [
  {
    icon: "ShieldTickIcon",
    header: "header number #1",
    cells: [
      [
        {
          label: "label 1",
          description: "description 1"
        },
        {
          label: "label 2",
          description: "description 2"
        },
        {
          label: "label 3",
          description: "description 3"
        }
      ]
    ]
  },
  {
    icon: "WalletIcon",
    header: "Bestest Wallet",
    cells: [
      [
        {
          label: "El walleto number uno",
          description: "jajajaja tak i jest"
        }
      ]
    ]
  }
];

export default (
  <TariffsTable
    context={context}
    rows={ROWS}
  />
);
