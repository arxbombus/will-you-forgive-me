import { useState } from "react";
import { myTestFunc } from "~/test";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";
import "./app.css";

function App() {
  const [count, setCount] = useState(0);
  const [countMod, setCountMod] = useState(0);

  const handleCountIncrement = () => {
    const newCount = myTestFunc(count, 10);
    setCount(newCount);
    setCountMod(newCount % 2);
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" rel="noopener" target="_blank">
          {/** biome-ignore lint/correctness/useImageSize: nope */}
          <img alt="Vite logo" className="logo" src={viteLogo} />
        </a>
        <a href="https://react.dev" rel="noopener" target="_blank">
          {/** biome-ignore lint/correctness/useImageSize: no thank you */}
          <img alt="React logo" className="logo react" src={reactLogo} />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleCountIncrement} type="button">
          count is {count}
        </button>
        <p>{countMod}</p>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
