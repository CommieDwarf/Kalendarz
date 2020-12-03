import React, { useState } from 'react';
import { Tile } from './tile.js';


export function MonthContent(props) {
  let tiles = [];
  let events = props.events

  for (let i = 0; i < props.numDays; i++) {
    let thisDayEvents = [];
    for (let j = 0; j < events.length; j++) {
      if (events[j].date.day == i) {
        thisDayEvents.push(events[j])
      }
    }
   tiles.push(<Tile events={thisDayEvents} key={i}/>);
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
