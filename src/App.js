import ApiQuery from "./components/ApiQuery/ApiQuery.js";
import "./App.css";
import tenacious from "./tenacious-d-tribute.gif";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={tenacious} alt="Tenacious D" />
        <p>
          This is not the greatest app in the world...{" "}
          <span id="cursive">this is just a tribute</span>
        </p>
        <p>Data will appear below in a minute:</p>
        <ApiQuery />
      </header>
    </div>
  );
}

export default App;
