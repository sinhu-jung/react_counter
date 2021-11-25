import React, {useState, useRef, useEffect} from 'react';
import "./App.css";

function App() {
  const [number, setNumber] = useState([0]);
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState('');
  const [undo, setUndo] = useState(true);
  const [redo, setRedo] = useState(true);
  const inputRef = useRef(null);

  const isInt = (num) => {
    return num % 1 === 0 && !isNaN(num) && num.indexOf(".") === -1 && num.indexOf(" ") === -1;
  }

  const inputChange = (e) => {
    setInput(e.target.value);
  }

  useEffect(() => {
    index > 0 ? setUndo(false) : setUndo(true);
    index < number.length - 1 ? setRedo(false) : setRedo(true);
  },[index])

  const buttonClick = (e) => {
    if(e.target.id === "addButton" || e.target.id === "subButton"){
      if(isInt(input)){
        let value = e.target.id === "addButton" ? input : -input;
        number.splice(index + 1);
        number.push(number[index] + parseInt(value));
        setIndex(index + 1);
      }
    } else if(e.target.id === "undoButton"){
      setIndex(index - 1);
    } else if (e.target.id === "redoButton"){
      setIndex(index + 1);
    }

    inputRef.current.focus();
    setInput('')
  }

  return (
    <div className="container">
      <div id="valuebox" className="counter">{number[index]}</div>
      <input ref={inputRef} id="inputbox" className="input" onChange={inputChange} value={input}/>
      <div className="btnGroup">
        <button id="undoButton" className="btn" onClick={buttonClick} disabled={undo}>Undo</button>
        <button id="addButton" className="btn" onClick={buttonClick}>+</button>
        <button id="subButton" className="btn" onClick={buttonClick}>-</button>
        <button id="redoButton" className="btn" onClick={buttonClick} disabled={redo}>Redo</button>
      </div>
    </div>
  );
}

export default App;