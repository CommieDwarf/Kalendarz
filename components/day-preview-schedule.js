import React from 'react';
import { Event } from './event';

export function DayPreviewSchedule(props) {
  let events = props.events;
  events = events.map((e, index) => <Event key={index} event={e} deleteEvent={props.deleteEvent} toggleWindow={props.toggleWindow}/>)

  return (
    <div id="day-preview-schedule">
      <div id="day-events">
        {events}
      </div>
    </div>
  )
}
