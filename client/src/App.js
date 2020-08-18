import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './components/customers/customers'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Customers/> {/* Embedded Customers component */}
      </header>
    </div>
  );
}

export default App;
