import "./App.css";

function App() {
  return (
  <div className="container">
    <div className="counter">0</div>
    <input className="input" />
    <div className="btnGroup">
      <button className="btn" disabled>Undo</button>
      <button className="btn">+</button>
      <button className="btn">-</button>
      <button className="btn" disabled>Redo</button>
    </div>
  </div>
  );
}

export default App;