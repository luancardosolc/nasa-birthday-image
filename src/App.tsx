import React from 'react';
import logo from './giphy.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          When is your birthday?
        </p>
        <form>
          <input type="text" name="birthday" placeholder="Type it here" />
          <br />
          <br />
          <input type="submit" value="Get image of my last Birthday" />
        </form>
      </header>
    </div>
  );
}

export default App;
