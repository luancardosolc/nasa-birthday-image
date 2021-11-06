import React, {useState} from 'react';
import logo from './giphy.gif';
import './App.css';

function App() {
  const [inputs, setInputs] = useState({birthday: ''});

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    if (event) {
      event.preventDefault();
    }
    console.log('Submit:', inputs);
  }

  const handleInputChange = (event: { persist: () => void; target: { name: any; value: any; }; }) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          When is your birthday?
        </p>
        <form onSubmit={handleSubmit}>
          <input type="text" name="birthday" placeholder="YYYY/MM/DD" onChange={handleInputChange} value={inputs.birthday} />
          <br />
          <br />
          <input type="submit" value="Get image of my last Birthday" />
        </form>
      </header>
    </div>
  );
}

export default App;
