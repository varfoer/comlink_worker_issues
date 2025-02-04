import logo from './logo.svg';
import './App.css';

import { test as regular_test } from "regular_worker";
import { test as comlink_test } from "comlink_worker";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Click and check console.
        </p>
        <button onClick={() => {
            regular_test();
            comlink_test();
        }}>
          TESTO
        </button>
      </header>
    </div>
  );
}

export default App;
