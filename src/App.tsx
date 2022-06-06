import React from 'react';
import './App.css';
import DatesView from './DatesView';
import { CHSUCalendare } from './library';




function App() {
  return (
    <div className="App">
      <div className='blocCal'>
        <h2>
          Простой
        </h2>
        <CHSUCalendare key="Simple" />
      </div>
      <div className='blocCal'>
        <h2>
          Первый день - <br />понедельник текущей <br />недели
        </h2>
        <CHSUCalendare StartDay={"FirstDayWeek"} key="FirstDayWeek" />
      </div>
      <div className='blocCal'>
        <h2>
          Начало - <wbr />текущий день
        </h2>
        <CHSUCalendare StartDay={"CurentDate"} key="CurentDate" />
      </div>
      <div className='blocCal'>
        <h2>
          С пустыми днями <br />вне месяца
        </h2>
        <CHSUCalendare WithoutLess key="WithoutLess" />
      </div>
      <div className='blocCal'>
        <h2>
          Минимальный год - <br />2022
        </h2>
        <CHSUCalendare minYear={2022} key="minYear_2022" />
      </div>
      <div className='blocCal'>
        <h2>
          с наименованием <br />месяца
        </h2>
        <CHSUCalendare MonthName key="MonthNames" />
      </div>
      <div className='blocCal'>
        <h2>
          Даты с нулями
        </h2>
        <CHSUCalendare zero key="zero" />
      </div>
      <div className='blocCal'>
        <h2>
          С нулями и <br />наименованием месяца
        </h2>
        <CHSUCalendare zero MonthName key="zeroAndMonthName" />
      </div>
      <div className='blocCal'>
        <h2>
          С нулями <br />с наименованием месяца <br />первая неделя <br />текущая неделя
        </h2>
        <CHSUCalendare zero MonthName StartDay={"FirstDayWeek"} key="zeroAndMonthNameFirstDayWeek" />
      </div>
      <div className='blocCal'>
        <h2>
          С отображением событий <br />с отображением от текущей <br />недели
        </h2>
        <CHSUCalendare DatesView={DatesView.Views} StartDay={"FirstDayWeek"} MonthName key="eventsFirstDayWeek" />
      </div>

    </div>
  );
}

export default App;
