import React from 'react';
import { Event } from './event';

export function DayPreviewSchedule(props) {

  return (
    <div id="day-preview-schedule">
      <div id="day-events">
        <Event/>
        <div id="event-2" className="event">
          <div className="event-time-div">
            <div id="event-time-1" className="event-time">
              21:37
            </div>
          </div>
          <div id="event-content-1" className="event-content">
          Nasrać do paczkomatu
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
        <div id="event-3" className="event">
          <div className="event-time-div">
            <div id="event-time-1" className="event-time">
              19:22
            </div>
          </div>
          <div id="event-content-1" className="event-content">
          Zrobić zakupy
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
        <div id="event-1" className="event">
          <div className="event-time-div">
            <div id="event-time-1" className="event-time">
              8:45
            </div>
          </div>
          <div id="event-content-1" className="event-content">
          Umyć okna
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
        <div id="event-2" className="event">
          <div className="event-time-div">
            <div id="event-time-1" className="event-time">
              20:05
            </div>
          </div>
          <div id="event-content-1" className="event-content">
          Nasrać do paczkomatu
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
        <div id="event-3" className="event">
          <div className="event-time-div">
            <div id="event-time-1" className="event-time">
              3:20
            </div>
          </div>
          <div id="event-content-1" className="event-content">
          Zrobić zakupy
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
        <div id="event-3" className="event">
          <div id="event-time-1" className="event-time">
            -
          </div>
          <div id="event-content-1" className="event-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Duis sit amet leo ac
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
      </div>
    </div>
  )
}
