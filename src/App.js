import "./styles.css";
import { AiOutlineArrowRight, AiOutlineArrowDown } from "react-icons/ai";
import { useState } from "react";

export default function App() {
  const [on, setOn] = useState(false);
  const handler = () => {
    setOn(!on);
  };
  const toShow = on ? "grow" : "srink";
  const placeholderLetter = "Search";
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div className="inputType">
        <input
          type="text"
          className={toShow}
          placeholder={on ? placeholderLetter : ""}
        />
        <button className="btn" onClick={handler}>
          {on ? (
            <AiOutlineArrowDown className="down" />
          ) : (
            <AiOutlineArrowRight className="right " />
          )}
        </button>
      </div>
    </div>
  );
}
