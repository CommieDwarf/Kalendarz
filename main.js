import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { AddEventWindow } from "./components/add-event-window";
import { MonthTitle } from "./components/month-title";
import { Content } from "./components/content";
import { DayPreview } from "./components/day-preview"


let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();

let fullDate = year+month+day;


function Main(props) {
/*
  let [events, setEvents] = useState({
    "29.11.2020|21:37": "event1"
  })

  function addEvent(eventToAdd, date) {
    setEvents((prev) => ({
      ...prev,
      [eventToAdd]: date,
    }))
  }*/

  let month = 10;
  let year = 2020;

  return (
    <div>
      <AddEventWindow />
      <MonthTitle />
      <Content/>
      <DayPreview />

    </div>
  )
}

ReactDOM.render(<Main /> , document.getElementById('main'))
