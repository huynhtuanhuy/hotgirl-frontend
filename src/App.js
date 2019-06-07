import React from 'react';
import Message from './Message';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Message />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
