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
   tiles.push(<Tile events={thisDayEvents} selectDay={selectDay} day={i} key={i}/>);
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

  function selectDay(event) {
    unselectAll();
    event.target.closest('.day-tile').classList.add('selected-tile');
    event.target.closest('.day-tile').classList.remove('highlight-tile');
    let day = event.target.closest('.day-tile').getAttribute('day')
    console.log(day);
    props.setSelectedDate({
      year: props.selectedDate.year,
      month: props.selectedDate.month,
      day: parseInt(day),
      dayOfWeek: new Date(props.selectedDate.year, props.selectedDate.month - 1, day).getDay()
    })


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
