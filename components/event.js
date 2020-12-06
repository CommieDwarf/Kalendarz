import React from 'react';

export function Event(props) {
  let currentEvent = props.event;

  function handleDelete() {
    props.deleteEvent(currentEvent.id)
  }

  let eventWindow = document.getElementById('add-event-window');

  function handleEdit() {
    props.toggleWindow("edit", currentEvent);
  }

  return (
    <div id="event-1" className="event">
      <div className="event-time-div">
        <div id="event-time-1" className="event-time">
          {currentEvent.time.hours+":"+currentEvent.time.minutes}
        </div>
      </div>
      <div id="event-content-1" className="event-content">
        {currentEvent.text}
      </div>
      <div className="event-menu">
        <div className="event-edit" onClick={handleEdit}>
          <i className="icon-pencil"></i>
        </div>
        <div className="event-remove" onClick={handleDelete}>
          <i className="icon-trash-empty"></i>
        </div>
      </div>
    </div>
  )
}
