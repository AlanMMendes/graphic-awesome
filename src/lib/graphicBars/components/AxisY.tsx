import { Fragment } from "react";

type Props = {
  maxValue: any;
  padding: any;
};

export const AxisY = ({ maxValue, padding }: Props) => {
  function SmallLine(): any {
    const array = [];
    for (var valueY = 0; valueY <= maxValue; valueY = valueY + padding) {
      array.push(
        <Fragment>
          <line
            key={valueY}
            x1={0} // x initial position of the line (might become a prop)
            y1={valueY} // y initial position of the line (might become a prop)
            x2={-1} // x final position of the line (might become a prop) <---
            y2={valueY} // y final position of the line (might become a prop)
            stroke="black" // color of the line (might become a prop)
            strokeWidth="0.2" // width of the line (might become a prop)
          />
          <text
            x={-5} // centers  the text above the graphic aka tooltip, 0.3 to adjust left or right (might become a prop) also controls the range value of the X axis
            y={valueY} // position of the text above the graphic aka tooltip, -1 to put the text above the bar (might become a prop)
            style={{ fontSize: "2px" }} // style of the tooltip  (might become a prop)
          >
            {maxValue - valueY}
          </text>
        </Fragment>
      );
      valueY = valueY + padding;
    }
    return array;
  }

  return (
    <>
      <line
        x1="0"
        y1="0"
        x2="0"
        y2={maxValue}
        stroke="black"
        strokeWidth="0.3"
      />
      <SmallLine />
    </>
  );
};

// 1. aumentar maxvalue para propocionar o grafico.
// 2. ajustar o viewbox para o tamanho proprocional ao grafico.
