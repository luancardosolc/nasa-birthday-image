import React, {useState} from 'react';
import logo from './giphy.gif';
import './App.css';
import EpicAPI from './API';
import Modal from './Modal';
import moment from 'moment';

function App() {
  const [inputs, setInputs] = useState({birthday: ''});
  const [open, setOpen] = React.useState(false);
  const [img, setImg] = React.useState('');
  const [imgText, setImgText] = React.useState('');

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    if (event) {
      event.preventDefault();
    }

    const currentYear = moment().year();
    const previousYear = moment().subtract(1, 'y').year();
    const today = moment();

    const birthdayArray = inputs.birthday.split('-');
    let dateString = currentYear + '-' + birthdayArray[1] + '-' + birthdayArray[2];
    let date = moment(dateString);

    if (date.isSameOrAfter(today, 'day')) {
      dateString = previousYear + '-' + birthdayArray[1] + '-' + birthdayArray[2];
      date = moment(dateString);
    }

    let result = await EpicAPI.getImage(dateString);

    for (let i = 1; i <= 30; i++) {
      if (result) { break; }
      if (!result) {
        // There's no image for that date, search for the closest one
        date = moment(dateString).add(i, 'days');
        result = await EpicAPI.getImage(date.format('YYYY-MM-DD'));
      }
    }
    
    setImg(result);
    setImgText(result ? '- ' + date.format('YYYY-MM-DD') : '');
    setOpen(true);
  }

  const handleInputChange = (event: { persist: () => void; target: { name: any; value: any; }; }) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          When is your birthday?
        </div>
        <div>
          If there's no picture for your birthday, we're gonna find a picture for the closest date ;)
        </div>
        <br />
        <form onSubmit={handleSubmit}>
          <input type="text" name="birthday" placeholder="YYYY-MM-DD" onChange={handleInputChange} value={inputs.birthday} />
          <br />
          <br />
          <input type="submit" value="Get image of my last Birthday" />
        </form>
        <Modal open={open} setOpen={setOpen} img={img} imgText={imgText} />
      </header>
    </div>
  );
}

export default App;
