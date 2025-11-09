import React from "react";
import GridRow from "./GridRow";

interface GridProps {
    className?: string;
}

// The config for each row kinda defines which cells should have bg colors
// Extended to 40+ cells to cover entire width
const rowConfigs: (string | undefined)[][] = [
  // Row 0: empty row
  [],
  // Row 1: empty row
  [],
  // Row 2: pattern with bg-[#f7f7f7] and bg-[#f2f2f2]
  [undefined, undefined, 'bg-[#f7f7f7]', 'bg-[#f7f7f7]', 'bg-[#f7f7f7]', undefined, undefined, 'bg-[#f2f2f2]', undefined, 'bg-[#f2f2f2]', undefined, 'bg-[#f2f2f2]', undefined, undefined, undefined, undefined, 'bg-[#f7f7f7]', 'bg-[#f7f7f7]', 'bg-[#f7f7f7]', undefined, undefined, undefined, 'bg-[#f7f7f7]', 'bg-[#f7f7f7]', 'bg-[#f7f7f7]', undefined, undefined, 'bg-[#f2f2f2]', undefined, 'bg-[#f2f2f2]', undefined, 'bg-[#f2f2f2]', undefined, undefined, undefined, undefined, 'bg-[#f7f7f7]', 'bg-[#f7f7f7]', 'bg-[#f7f7f7]', undefined],
  // Row 3: pattern
  [undefined, undefined, 'bg-[#f7f7f7]', undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, 'bg-[#f7f7f7]', undefined, undefined, undefined, 'bg-[#f7f7f7]', undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, 'bg-[#f7f7f7]', undefined],
  // Row 4: empty row
  [],
  // Row 5: empty row
  [],
  // Row 6: pattern
  [undefined, undefined, 'bg-[#f7f7f7]', undefined, undefined, undefined, undefined, undefined, 'bg-[#f7f7f7]', 'bg-[#f7f7f7]', undefined, undefined, undefined, undefined, undefined, undefined, undefined, 'bg-[#f7f7f7]', undefined, undefined, undefined, undefined, 'bg-[#f7f7f7]', undefined, undefined, undefined, undefined, undefined, 'bg-[#f7f7f7]', 'bg-[#f7f7f7]', undefined, undefined, undefined, undefined, undefined, undefined, undefined, 'bg-[#f7f7f7]', undefined, undefined],
  // Row 7: empty row
  [],
  // Row 8: empty row
  [],
  // Row 9: pattern
  [undefined, undefined, 'bg-[#f7f7f7]', undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, 'bg-[#f7f7f7]', undefined, undefined, undefined, undefined, 'bg-[#f7f7f7]', undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, 'bg-[#f7f7f7]', undefined, undefined],
  // Row 10: pattern with bg-[#f2f2f2]
  [undefined, undefined, 'bg-[#f7f7f7]', 'bg-[#f7f7f7]', undefined, undefined, undefined, undefined, undefined, 'bg-[#f2f2f2]', undefined, 'bg-[#f2f2f2]', undefined, 'bg-[#f2f2f2]', undefined, undefined, 'bg-[#f7f7f7]', 'bg-[#f7f7f7]', undefined, undefined, undefined, undefined, 'bg-[#f7f7f7]', 'bg-[#f7f7f7]', undefined, undefined, undefined, undefined, undefined, 'bg-[#f2f2f2]', undefined, 'bg-[#f2f2f2]', undefined, 'bg-[#f2f2f2]', undefined, undefined, 'bg-[#f7f7f7]', 'bg-[#f7f7f7]', undefined, undefined],
  // Row 11: pattern
  [undefined, undefined, undefined, 'bg-[#f7f7f7]', undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, 'bg-[#f7f7f7]', undefined, undefined, undefined, undefined, undefined, undefined, 'bg-[#f7f7f7]', undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, 'bg-[#f7f7f7]', undefined, undefined, undefined],
  // Row 12: empty row
  [],
];

export default function Grid({ className = '' }: GridProps) {
    // calculate no of cells needed to fill the viewport (around 74px each )
    // concluded 40 cells is enough to cover most screens
    const cellCount = 40;

    return (
        <div
            className={`absolute box-border content-stretch flex flex-col items-start left-[-10px] pb-px pt-0 px-0 top-0 w-full ${className}`}
            data-name="Grid"
        >
            {rowConfigs.map((config, index) => (
                <GridRow key={index} cellColors={config} cellCount={cellCount} />
            ))}
        </div>
    );
}