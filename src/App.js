import React, {useState, useRef} from 'react';
import "./App.css";

function App() {
  const [numbers, setNumbers] = useState([0]);
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  const isInt = (num) => {
    return num % 1 === 0 && !isNaN(num) && num.indexOf(".") === -1 && num.indexOf(" ") === -1;
  }

  const inputChange = (e) => {
    setInput(e.target.value);
  }

  const buttonClick = (e) => {
    if(e.target.id === "addButton" || e.target.id === "subButton"){
      if(isInt(input)){
        let value = e.target.id === "addButton" ? input : -input;
        setNumbers([...numbers.slice(0, index + 1), Number(numbers[index]) + Number(value)]);
        setIndex(index + 1);
      }
    } 
    inputRef.current.focus();
    setInput('')
  }

  return (
    <div className="container">
      <div id="valuebox" className="counter">{numbers[index]}</div>
      <input ref={inputRef} id="inputbox" className="input" onChange={inputChange} value={input}/>
      <div className="btnGroup">
        <button id="undoButton" className="btn" onClick={() => setIndex(index - 1)} disabled={index > 0 ? false : true}>Undo</button>
        <button id="addButton" className="btn" onClick={buttonClick}>+</button>
        <button id="subButton" className="btn" onClick={buttonClick}>-</button>
        <button id="redoButton" className="btn" onClick={() => setIndex(index + 1)} disabled={index < numbers.length - 1 ? false : true}>Redo</button>
      </div>
    </div>
  );
}

export default App;