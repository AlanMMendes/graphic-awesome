type Props = {
  widthBar: number;
  padding: number;
  item: any;
  maxValue: any;
  index: any;
  array: any[];
};

export const AxisX = ({
  widthBar,
  padding,
  item,
  maxValue,
  index,
  array,
}: Props) => {
  return (
    <>
      {/*  line of axis Y */}
      <line
        x1={(widthBar + padding) * array.length} // position of the initial value of the line on the x axis (might become a prop)
        y1={maxValue} // position of the initial value of the line on the y axis (might become a prop)
        x2="0" // position of the final value of the line on the x axis (might become a prop)
        y2={maxValue} // position of the final value of the line on the y axis (might become a prop)
        stroke="black" // color of the line (might become a prop)
        strokeWidth="0.3" // width of the line (might become a prop)
      />

      {/* small line of axis Y */}
      <line
        x1={(widthBar + padding) * (index + 0.1)} // x position of the line (might become a prop)
        y1={maxValue}
        x2={(widthBar + padding) * (index + 0.1)}
        y2={maxValue + 0.6}
        stroke="black"
        strokeWidth="0.2"
      />
      {/* tooltip of axis Y */}
      <text
        x={(widthBar + padding) * (index + 0.4)} // centers  the text above the graphic aka tooltip, 0.3 to adjust left or right (might become a prop) also controls the range value of the X axis
        y={maxValue + 3} // position of the text above the graphic aka tooltip, -1 to put the text above the bar (might become a prop)
        style={{ fontSize: "2px" }} // style of the tooltip  (might become a prop)
      >
        {item.month}
      </text>
    </>
  );
};
