import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const isMicro = window.__POWERED_BY_QIANKUN__
  const handleClick = () => {
    window.history.pushState(null, 'sub-vue', '/view/dist')
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {isMicro && <span className="App-link" onClick={handleClick} style={{marginTop: 20, fontSize: 18}}>>>sub-vue</span>}
      </header>
    </div>
  );
}

export default App;
