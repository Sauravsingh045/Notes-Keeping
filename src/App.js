import React, { useState } from 'react';
import './Components/css/App.css';
import Notes from './Components/NoteComponents/Notes';
import Header from './Components/NoteComponents/Header';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function App() {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="main">
      <h1 style={{ textAlign: 'center' }}>The simplest way to keep notes</h1>
      
      <Header />
      <Notes />
      <div className="cal">
      <Calendar onChange={onChange} value={date} /></div>
      
    </div>
  );
}

export default App;
