import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { AddEventWindow } from "./components/add-event-window";
import { MonthTitle } from "./components/month-title";
import { MonthContent } from "./components/month-content";
import { DayPreview } from "./components/day-preview"
import { YearTitle } from "./components/year-title";


function Main(props) {

  let today = new Date();
  let currentYear = today.getFullYear();
  let currentMonth = today.getMonth();
  let currentDay = today.getDate();
  let currentDayOfWeek = today.getDay();
  let currentHour = today.getHours();
  let currentMinute = today.getMinutes();

  let [events, setEvents] = useState(
    [
      {
        id: 0,
        date: {day: currentDay, month: currentMonth, year: currentYear},
        hour: `${currentHour}:${currentMinute}`,
        text: "Rucham psa jak sra"
      }
    ]
  )

  let [selectedDate, setSelectedDate] = useState(
    {
      day: currentDay,
      month: currentMonth,
      year: currentYear,
    });


    let numDays = getDaysInMonth(selectedDate);
    let thisMonthEvents = [];

    for (let i = 0; i < events.length; i++) {
      if (events[i].date.year == selectedDate.year && events[i].date.month == selectedDate.month) {
        thisMonthEvents.push(events[i])
      }
    }

    function getDaysInMonth(date) {
      let lastDay = new Date(date.year, date.month + 1, 0);
      return lastDay.getDate();
    }

  return (
    <div>

      <YearTitle year={selectedDate.year} />
      <AddEventWindow />
      <MonthTitle month={selectedDate.month}/>
      <MonthContent selectedDate={selectedDate} events={thisMonthEvents} numDays={numDays}/>
      <DayPreview selectedDate={selectedDate}/>
    </div>
  )
}

ReactDOM.render(<Main /> , document.getElementById('main'))
