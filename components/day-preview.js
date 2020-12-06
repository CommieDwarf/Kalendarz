import React, { useState } from 'react';
import { DayPreviewSchedule } from './day-preview-schedule';
import { AddEventButton } from './add-event-button';
import { Diary } from './diary';
export function DayPreview(props) {
  let daysOfAWeek = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
  return (
    <div id="day-preview">
      <div id="day-preview-title">
        <h2>{daysOfAWeek[props.selectedDate.dayOfWeek]}</h2>
      </div>
      <div id="day-preview-content">
        <div id="day-preview-stuff">
          <DayPreviewSchedule events={props.events} deleteEvent={props.deleteEvent} toggleWindow={props.toggleWindow} />
          <AddEventButton toggleWindow={props.toggleWindow}/>
        </div>
        <Diary />
      </div>
    </div>
  )
}
