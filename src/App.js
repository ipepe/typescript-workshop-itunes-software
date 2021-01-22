import logo from "./logo.svg";
import "./App.css";

function TitleDisplay({ title }) {
  return (
    <div>
      <b>{title}</b>
    </div>
  );
}

function App({ title }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TitleDisplay title={title} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React today!
        </a>
      </header>
    </div>
  );
}

export default App;
