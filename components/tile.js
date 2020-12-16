import React, { useState } from 'react';

export function Tile(props) {
  let events = props.events;
  events = events.map((e) => e.text);
  events = shortenEvents(events);
  events = events.slice(0, 4);
  events = events.map((e, index) => {
    return <li key={index}><span>{e}</span></li>
  })


  function shortenEvents(events) {
    return events.map((e) => {
      if (e.length > 10) {
        return e.substr(0, 9) + "…";
      } else {
        return e
      }
    })
  }




  return (
    <div className="day-tile" onClick={props.selectDay} day={props.day + 1} id={'tile-' + (props.day + 1)}>
      {props.hasNote && <i className="icon-note"></i>}
      {props.hasWeather && <i className="icon-cloud-sun"></i>}
      <ul>
        <div className="day">{props.day + 1}</div>
        {events}
      </ul>
    </div>
  )
}
