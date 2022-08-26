type Props = {
  widthBar: number;
  padding: number;
  item: any;
  maxValue: any;
  index: any;
  incrementId: any;
};

export const Bars = ({
  widthBar,
  padding,
  item,
  maxValue,
  index,
  incrementId,
}: Props) => {
  function showTooltip(screenPoint: any, someSvgObject: any) {
    var CTM = someSvgObject.getScreenCTM();
    var mouseX = (screenPoint?.clientX - CTM?.e) / CTM?.a;
    var mouseY = (screenPoint?.clientY - CTM?.f) / CTM?.d;

    someSvgObject.setAttributeNS(null, "x", mouseX + 6 / CTM.a);
    someSvgObject.setAttributeNS(null, "y", mouseY + 20 / CTM.d);
    someSvgObject.setAttributeNS(null, "visibility", "visible");
    someSvgObject.setAttributeNS(null, "fill", "orange");
  }

  function hideTooltip(screenPoint: any, someSvgObject: any) {
    var CTM = someSvgObject.getScreenCTM();
    var mouseX = (screenPoint?.clientX - CTM?.e) / CTM?.a;
    var mouseY = (screenPoint?.clientY - CTM?.f) / CTM?.d;
    someSvgObject.setAttributeNS(null, "x", mouseX + 6 / CTM.a);
    someSvgObject.setAttributeNS(null, "y", mouseY + 20 / CTM.d);
    someSvgObject.setAttributeNS(null, "visibility", "hidden");
    someSvgObject.setAttributeNS(null, "fill", "orange");
  }

  return (
    <>
      <rect
        id={incrementId + "rect"}
        width={widthBar} // width of each bar
        height={item?.value} // height of each bar
        x={(widthBar + padding) * (index + 0.1)} // x position of each bar
        y={maxValue - item?.value} // y position of each bar
        onMouseMove={(e: any) => {
          const mySVG = document.getElementById(incrementId + "tooltip");
          showTooltip(e, mySVG);
        }}
        onMouseOut={(e: any) => {
          const mySVG = document.getElementById(incrementId + "tooltip");
          hideTooltip(e, mySVG);
        }}
      />

      <text
        x={(widthBar + padding) * (index + 0.3)} // centers  the text above the graphic aka tooltip, 0.3 to adjust left or right (might become a prop)
        y={maxValue - item?.value - 1} // position of the text above the graphic aka tooltip, -1 to put the text above the bar (might become a prop)
        style={{ fontSize: "3px" }} // style of the tooltip  (might become a prop)
      >
        {item.value}
      </text>

      <text id={incrementId + "tooltip"} visibility="hidden">
        {item.value}
      </text>
    </>
  );
};
