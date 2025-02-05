import logo from './logo.svg';
import './App.css';

import { testWorkerWithImport, testWorkerWithoutImport, testWorkerWithLocalImport } from "worker_package";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Click and check console.
        </p>
        <button onClick={() => {
            testWorkerWithoutImport();
            testWorkerWithLocalImport();
            testWorkerWithImport();
        }}>
          TESTO
        </button>
      </header>
    </div>
  );
}

export default App;
