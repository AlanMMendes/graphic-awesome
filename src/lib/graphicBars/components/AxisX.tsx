type Props = {
  widthBar: number;
  padding: number;
  item: any;
  maxValue: any;
  index: any;
  array: any[];
  maxWidth: any;
  maxHeight: any;
};

export const AxisX = ({
  widthBar,
  padding,
  item,
  maxValue,
  index,
  array,
  maxWidth,
  maxHeight,
}: Props) => {
  const Line = () => (
    <line
      className="XLine"
      x1={0} // position of the initial value of the line on the x axis (might become a prop)
      y1={maxHeight} // position of the initial value of the line on the y axis (might become a prop)
      x2={maxWidth} // position of the final value of the line on the x axis (might become a prop)
      y2={maxHeight} // position of the final value of the line on the y axis (might become a prop)
      stroke="black" // color of the line (might become a prop)
      strokeWidth="0.3" // width of the line (might become a prop)
    />
  );
  const SmallLine = () => (
    <>
      <line
        className="XSmallLine"
        x1={(widthBar + padding) * (index + 0.1) + widthBar / 2} // x position of the line (might become a prop)
        y1={maxHeight}
        x2={(widthBar + padding) * (index + 0.1) + widthBar / 2}
        y2={maxHeight + 0.6}
        stroke="black"
        strokeWidth="0.2"
      />
      <text
        className="XTip"
        x={(widthBar + padding) * (index + 0.1) + widthBar / 2} // centers  the text above the graphic aka tooltip, 0.3 to adjust left or right (might become a prop) also controls the range value of the X axis
        y={maxHeight + 3} // position of the text above the graphic aka tooltip, -1 to put the text above the bar (might become a prop)
        style={{ fontSize: "2px" }} // style of the tooltip  (might become a prop)
      >
        {item.month}
      </text>
    </>
  );
  return (
    <>
      {index === 0 && <Line />}
      <SmallLine />
    </>
  );
};
