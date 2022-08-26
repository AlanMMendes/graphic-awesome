type Props = {
  maxValue: any;
  values: any;
};

export const AxisY = ({ maxValue, values }: Props) => {
  function SmallLine(): any {
    const array = [];
    var padding = 0;
    while (padding <= maxValue) {
      array.push(
        <line
          key={padding}
          x1={0} // x initial position of the line (might become a prop)
          y1={padding} // y initial position of the line (might become a prop)
          x2={-1} // x final position of the line (might become a prop) <---
          y2={padding} // y final position of the line (might become a prop)
          stroke="black" // color of the line (might become a prop)
          strokeWidth="0.2" // width of the line (might become a prop)
        />
      );
      padding = padding + values;
    }
    return array;
  }

  return (
    <>
      {/* line of axis Y */}
      <line
        x1="0"
        y1="0"
        x2="0"
        y2={maxValue}
        stroke="black"
        strokeWidth="0.3"
      />

      {/* Small line of axys Y */}
      <SmallLine />

      {/* text  of axis Y */}
      {/* <text
        x={-5} // centers  the text above the graphic aka tooltip, 0.3 to adjust left or right (might become a prop) also controls the range value of the X axis
        y={maxValue - index * 50} // position of the text above the graphic aka tooltip, -1 to put the text above the bar (might become a prop)
        style={{ fontSize: "2px" }} // style of the tooltip  (might become a prop)
      >
        {item.value}
      </text> */}
    </>
  );
};

// 1. aumentar maxvalue para propocionar o grafico.
// 2. adicionar o texto do eixo Y.
// 3. incrementar zIndex dos tooltip para nao aparecer abaixo um do outro.
// 4. ajustar o viewbox para o tamanho proprocional ao grafico.
// 5. ajustar texto do eixo X para ficar centralizado a barra.
