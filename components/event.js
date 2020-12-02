import React from 'react';

export function Event(props) {

  return (
    <div id="event-1" className="event">
      <div className="event-time-div">
        <div id="event-time-1" className="event-time">
          8:00
        </div>
      </div>
      <div id="event-content-1" className="event-content">
      Umyć okna dla Jezusa
      </div>
      <div className="event-menu">
        <div className="event-edit">
          <i className="icon-pencil"></i>
        </div>
        <div className="event-remove">
          <i className="icon-trash-empty"></i>
        </div>
      </div>
    </div>
  )
}
