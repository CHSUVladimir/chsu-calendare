import React from 'react';
import './App.css';
import {CHSUCalendare} from './library';


function App() {
  return (
    <div className="App">
      <CHSUCalendare/>
      <CHSUCalendare StartDay={"FirstDayWeek"}/>
      <CHSUCalendare StartDay={"CurentDate"}/>
    </div>
  );
}

export default App;
