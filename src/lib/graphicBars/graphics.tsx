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
};

export const GraphicBar = ({
  widthBar,
  array,
  paddingBar,
  widthGraphic,
  heightGraphic,
  paddingY,
}: Props) => {
  const maxValue = Math.max(...array.map(({ value }) => value));

  return (
    <Fragment>
      <svg
        viewBox="-50 -10 200 100"
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
            />

            <AxisX
              widthBar={widthBar}
              padding={paddingBar}
              item={item}
              maxValue={maxValue}
              index={index}
              array={array}
            />
          </Fragment>
        ))}

        <AxisY maxValue={maxValue} padding={paddingY} />
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
