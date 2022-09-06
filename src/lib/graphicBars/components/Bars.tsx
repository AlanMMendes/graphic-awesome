type Props = {
  widthBar: number;
  padding: number;
  item: any;
  maxValue: any;
  index: any;
  incrementId: any;
  maxHeight: any;
  maxWidth: any;
};

export const Bars = ({
  widthBar,
  padding,
  item,
  maxValue,
  index,
  incrementId,
  maxWidth,
  maxHeight,
}: Props) => {
  var partialPercentage = (maxHeight * item.value) / maxValue - 5;
  var partialPercentage1 = (maxWidth * item.value) / maxValue;

  function bringToTop(targetElement: any) {
    // put the element at the bottom of its parent
    let parent = targetElement.parentNode;
    parent.appendChild(targetElement);
  }

  function showTooltip(screenPoint: any, someSvgObject: any) {
    // get position of the mouse
    var CTM = someSvgObject.getScreenCTM();
    var mouseX = (screenPoint?.clientX - CTM?.e) / CTM?.a;
    var mouseY = (screenPoint?.clientY - CTM?.f) / CTM?.d;

    // get position of the mouse
    someSvgObject.setAttributeNS(null, "x", mouseX + 6 / CTM.a);
    someSvgObject.setAttributeNS(null, "y", mouseY + 20 / CTM.d);
    someSvgObject.setAttributeNS(null, "visibility", "visible");
    someSvgObject.setAttributeNS(null, "fill", "orange");
  }

  function hideTooltip(screenPoint: any, someSvgObject: any) {
    // get position of the mouse
    var CTM = someSvgObject.getScreenCTM();
    var mouseX = (screenPoint?.clientX - CTM?.e) / CTM?.a;
    var mouseY = (screenPoint?.clientY - CTM?.f) / CTM?.d;

    // set attributes of the tooltip
    someSvgObject.setAttributeNS(null, "x", mouseX + 6 / CTM.a);
    someSvgObject.setAttributeNS(null, "y", mouseY + 20 / CTM.d);
    someSvgObject.setAttributeNS(null, "visibility", "hidden");
    someSvgObject.setAttributeNS(null, "fill", "orange");
  }

  return (
    <>
      <rect
        id={incrementId + "rect"}
        className="Bar"
        width={widthBar} // width of each bar
        height={partialPercentage} // height of each bar
        x={(widthBar + padding) * (index + 0.1)} // x position of each bar
        y={maxHeight - partialPercentage} // y position of each bar
        onMouseMove={(e: any) => {
          const mySVG = document.getElementById(incrementId + "tooltip");
          showTooltip(e, mySVG);
          bringToTop(document.getElementById(incrementId + "tooltip"));
        }}
        onMouseOut={(e: any) => {
          const mySVG = document.getElementById(incrementId + "tooltip");
          hideTooltip(e, mySVG);
        }}
      />
      <text id={incrementId + "tooltip"} visibility="hidden">
        {item.value}
      </text>

      <text
        className="BarTip"
        x={(widthBar + padding) * (index + 0.3)} // centers  the text above the graphic aka tooltip, 0.3 to adjust left or right (might become a prop)
        y={maxHeight - partialPercentage - 1} // position of the text above the graphic aka tooltip, -1 to put the text above the bar (might become a prop)
        style={{ fontSize: "3px" }} // style of the tooltip  (might become a prop)
      >
        {item.value}
      </text>
    </>
  );
};
