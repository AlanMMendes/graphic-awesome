import "./App.css";
import { GraphicBar } from "./lib/graphicBars/graphics";

function App() {
  const array = [
    { value: 10, month: "Jan" },
    { value: 20, month: "Feb" },
    { value: 30, month: "Mar" },
  ];
  return (
    <div className="App">
      <h1>Bar Graphic</h1>
      <GraphicBar
        widthBar={10}
        paddingBar={2}
        paddingY={array.length}
        widthGraphic={500}
        heightGraphic={500}
        maxHeight={200}
        maxWidth={200}
        minX={0}
        minY={10}
        array={array}
      />
    </div>
  );
}

export default App;
