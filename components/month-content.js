import React, { useState } from 'react';
import { Tile } from './tile.js';
import { BlankTile } from "./blank-tile.js";


export function MonthContent(props) {
  let tiles = [];
  let events = props.events;

  let firstDay = checkFirstDay();

  for (let i = firstDay; i > 0; i--) {
    let day = new Date(props.selectedDate.year, props.selectedDate.month, -i).getDate();
    tiles.push(<BlankTile day={day}key={i+100}/>);
  }

  for (let i = 0; i < props.numDays; i++) {
    let thisDayEvents = [];
    for (let j = 0; j < events.length; j++) {
      if (events[j].date.day == i + 1) {
        thisDayEvents.push(events[j])
      }
    }
    thisDayEvents = thisDayEvents.sort((a, b) => {
      return (parseInt(a.time.hours) + parseInt(a.time.minutes) * 0.01) - (parseInt(b.time.hours) + parseInt(b.time.minutes) * 0.01);
    })
    let dayNotes = props.dayNotes;
    let hasNote = false;
    for (let k = 0; k < dayNotes.length; k++) {
      if (dayNotes[k].date.year == props.selectedDate.year &&
      dayNotes[k].date.month == props.selectedDate.month &&
      dayNotes[k].date.day == i + 1) {
        hasNote = true;
      }
    }

    let hasWeather = false;
    if (props.weather && props.weather.list) {
      let weather = props.weather.list
      for (let k = 0; k < weather.length; k++) {
        let date = new Date(weather[k].dt * 1000)
        if (date.getFullYear() == props.selectedDate.year &&
        date.getMonth() + 1 == props.selectedDate.month &&
        date.getDate() == i + 1) {
          hasWeather = true;
        }
      }
    }

   tiles.push(<Tile events={thisDayEvents} selectDay={selectDay} day={i} key={i} hasNote={hasNote} hasWeather={hasWeather}/>);
  }

  let i = 0;
  while (tiles.length % 7 != 0) {
    tiles.push(<BlankTile day={i} key={i+200}/>)
    i++;
  }


  function checkFirstDay() {
    let date = new Date(props.selectedDate.year, props.selectedDate.month - 1, 1);
    let day = date.getDay();
    return day;
  }

  let dayNotes = props.dayNotes;

  function selectDay(event) {



    unselectAll();
    event.target.closest('.day-tile').classList.add('selected-tile');
    event.target.closest('.day-tile').classList.remove('highlight-tile');
    let day = event.target.closest('.day-tile').getAttribute('day')
    props.setSelectedDate({
      year: props.selectedDate.year,
      month: props.selectedDate.month,
      day: parseInt(day),
      dayOfWeek: new Date(props.selectedDate.year, props.selectedDate.month - 1, day).getDay()
    })

    if (props.newNote) {
      props.setDayNotes(props.dayNotes.filter(note => {
        return note.id + "" !== "" + props.selectedDate.year + props.selectedDate.month + props.selectedDate.day;
      }))
      props.setDayNotes((prev) => [
        ...prev,
        {
          id: "" + props.selectedDate.year + props.selectedDate.month + props.selectedDate.day,
          date: {
            year: props.selectedDate.year,
            month: props.selectedDate.month,
            day: props.selectedDate.day,
          },
          note: props.newNote
        }
      ]
    )
  } else {
    props.setDayNotes(props.dayNotes.filter(note => {
      return note.id + "" !== "" + props.selectedDate.year + props.selectedDate.month + props.selectedDate.day;
    }))
  }


    function unselectAll() {
      let tiles = document.querySelectorAll('.day-tile')
      tiles.forEach((tile) => tile.classList.remove('selected-tile'));
    }
  }

  return (
    <div id="content">
       <div id="week-days">
         <span id="pon" className="week-day">Pon</span>
         <span id="wt" className="week-day">Wt</span>
         <span id="sr" className="week-day">Śr</span>
         <span id="czw" className="week-day">Czw</span>
         <span id="piat" className="week-day">Piąt</span>
         <span id="sob" className="week-day">Sob</span>
         <span id="niedz" className="week-day">Niedź</span>
       </div>
       <div id="day-tiles">
          {tiles}
      </div>
    </div>
  )
}
