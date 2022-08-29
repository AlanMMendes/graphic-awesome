import "./App.css";
import { GraphicBar } from "./lib/graphicBars/graphics";

function App() {
  const array = [
    { value: 10, month: "Jan" },
    { value: 20, month: "Feb" },
    { value: 30, month: "Mar" },
    { value: 40, month: "Apr" },
    { value: 50, month: "May" },
    { value: 60, month: "Jun" },
    { value: 70, month: "Jul" },
    { value: 80, month: "Aug" },
    { value: 90, month: "Sep" },
    { value: 130, month: "Sep" },
    { value: 163, month: "Sep" },
  ];
  return (
    <div className="App">
      <h1>Bar Graphic</h1>
      <GraphicBar
        widthBar={10}
        paddingBar={2}
        paddingY={array.length}
        widthGraphic={1000}
        heightGraphic={1000}
        array={array}
      />
    </div>
  );
}

export default App;
