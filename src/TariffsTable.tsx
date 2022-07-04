import { JSX } from "@redneckz/uni-jsx";
import type { LinkContent, Picture, UniBlockProps } from "./types";
import { Icon, IconName } from "./ui-kit/Icon";

export interface TariffsTableItem extends UniBlockProps {
  icon: string;
  advantage: string;
  description: {
    content: "img" | "text"
    items: Picture[] | TextItem[]
  };
}

interface TextItem {
  header: string,
  desc?: string;
}

export interface TariffsTableRow {
  icon?: string;
  header: string;
  cells: TariffsTableCell[];
}

// type TariffsTableCell =
//   { label: string, description?: string }[] // text
//   | Picture // image
//   | { icon: IconName, link: LinkContent }[] // icons

type TariffsTableCell =
  { label: string, description?: string }[] // text
  // | Picture // image
  // | { icon: IconName, link: LinkContent }[] // icons

export interface TariffsBlockContent {
  icon?: { name: string };
  title?: string;
}

export interface TariffsTableContent {
  rows: TariffsTableRow[];
}

export interface TariffsTableProps extends TariffsTableContent, UniBlockProps {
}

// export const TariffsTable = JSX<TariffsTableItem>(({ className, icon, advantage, description }) => {
//   return (
//     render(icon, advantage, description)
//   );
// });

export const TariffsTable = JSX<TariffsTableProps>(({ className, rows }) => {
  return (
    renderRow(rows)
  );
});


// const render = (icon, advantage, description) => {
//   return (
//     <section className="font-sans text-primary-text text-sm">
//       <div className="py-5 flex">
//         <div className="mr-[14px]">icon</div>
//         <div className="w-[316px] mr-10">text</div>
//         <div className="flex-grow">grower</div>
//       </div>
//
//       <div className="py-5 flex">
//         <div className="mr-[14px]">icon</div>
//         <div className="w-[316px] mr-10">text</div>
//         <div className="flex-grow">grower</div>
//       </div>
//
//       <div className="grid grid-cols-10 ">
//         <div className="col-start-1 col-end-4 items-start">
//           <div className="flex items-start">
//             {/*<span className="w-max-[24px] mr-[14px]">icon</span>*/}
//             {/*{(icon && ICONS[icon]?.({ width: 24, height: 24, className: "w-min-[24px] mr-[14px]" }))}*/}
//             {/*<CardIcon className="min-w-[24px] mr-[14px] block" width={24} height={24} />*/}
//             <Icon className="min-w-[24px] mr-[14px] block" name="WalletIcon" />
//             {/*<span className="min-w-[24px] mr-[14px] block">co</span>*/}
//             <span>{advantage}</span>
//           </div>
//         </div>
//         <div className="pl-10 col-start-4 col-end-11">
//           {drawContent(description)}
//         </div>
//       </div>
//     </section>
//   );
// };

const renderRow = ([{ icon, header, cells }]: TariffsTableRow[]) => {
  return (
    <section className="font-sans text-primary-text text-sm">
      <div className="py-5 flex">
        <div className="mr-[14px]">icon</div>
        <div className="w-[316px] mr-10">text</div>
        <div className="flex-grow">grower</div>
      </div>

      <div className="py-5 flex">
        <div className="mr-[14px]">icon</div>
        <div className="w-[316px] mr-10">text</div>
        <div className="flex-grow">grower</div>
      </div>

      <div className="grid grid-cols-10 ">
        <div className="col-start-1 col-end-4 items-start">
          <div className="flex items-start">
            {/*<span className="w-max-[24px] mr-[14px]">icon</span>*/}
            {/*{(icon && ICONS[icon]?.({ width: 24, height: 24, className: "w-min-[24px] mr-[14px]" }))}*/}
            {/*<CardIcon className="min-w-[24px] mr-[14px] block" width={24} height={24} />*/}
            <Icon className="min-w-[24px] mr-[14px] block" name="WalletIcon" />
            {/*<span className="min-w-[24px] mr-[14px] block">co</span>*/}
            <span>{header}</span>
          </div>
        </div>
        <div className="pl-10 col-start-4 col-end-11">
          {drawColumns(cells)}
        </div>
      </div>
    </section>
  );
};

// const drawContent = (description) => {
//   const itemsLength = description.items.length;
//
//   if (description.content === "img") {
//     return <div></div>;
//   } else {
//     return (
//       <div>
//         {(description.items as TextItem[]).map(({ header, desc }, idx) => (
//           <div key={idx}>
//             {(0 < idx && idx < itemsLength) &&
//               <div className="border border-main-divider border-solid my-4 border-x-0 border-b-0"></div>}
//             <div className="text-xl font-medium">
//               {header}
//             </div>
//             {desc &&
//               <div className="mt-1 text-sm text-secondary-text">
//                 {desc}
//               </div>}
//           </div>
//         ))}
//       </div>
//     );
//   }
// };

const drawColumns = (cells: TariffsTableCell[]) => {
  const itemsLength = cells.length;

  console.log("cells: %o", cells);

  if ("src" in cells[0]) { // image
    return <div></div>;
  } else if ("icon" in cells[0][0]) { // icon
    // return <Icon name={cells[0][0].icon} />;
    return null;
  } else {
    return (
      <div>
        {(cells[0] as { label: string, description?: string }[]).map(({ label, description }, idx) => (
          <div key={idx}>
            {(0 < idx) &&
              <div className="border border-main-divider border-solid my-4 border-x-0 border-b-0"></div>}
            <div className="text-xl font-medium">
              {label}
            </div>
            {description &&
              <div className="mt-1 text-sm text-secondary-text">
                {description}
              </div>}
          </div>
        ))}
      </div>
    );
  }
};
