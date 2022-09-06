import { Fragment } from "react";
import { AxisX } from "./components/AxisX";
import { AxisY } from "./components/AxisY";
import { Bars } from "./components/Bars";

type Props = {
  widthBar: number;
  array: any[];
  paddingBar: number;
  widthGraphic: any;
  heightGraphic: any;
  paddingY: any;
  minX: any;
  minY: any;
  maxWidth: any;
  maxHeight: any;
};

export const GraphicBar = ({
  widthBar,
  array,
  paddingBar,
  widthGraphic,
  heightGraphic,
  paddingY,
  minX,
  minY,
  maxWidth,
  maxHeight,
}: Props) => {
  const maxValue = Math.max(...array.map(({ value }) => value));

  return (
    <Fragment>
      <svg
        viewBox={`${minX} ${minY} ${maxWidth} ${maxHeight}`}
        width={widthGraphic}
        height={heightGraphic}
      >
        {array.map((item: any, index: any) => (
          <Fragment key={index}>
            <Bars
              incrementId={index}
              widthBar={widthBar}
              padding={paddingBar}
              item={item}
              maxValue={maxValue}
              index={index}
              maxHeight={maxHeight}
              maxWidth={maxWidth}
            />

            <AxisX
              widthBar={widthBar}
              padding={paddingBar}
              item={item}
              maxValue={maxValue}
              index={index}
              array={array}
              maxWidth={maxWidth}
              maxHeight={maxHeight}
            />
          </Fragment>
        ))}

        <AxisY maxHeight={maxHeight} padding={paddingY} />
      </svg>
    </Fragment>
  );
};

// objectives to be achieved:
// 1. add tooltip on hover
// 2. add text x axis
// 3. check more options about viewBox
// 4. add responsivity to graphics
// 5. add skeleton loader
