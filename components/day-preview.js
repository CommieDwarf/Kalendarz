import React, { useState } from 'react';
import { DayPreviewSchedule } from './day-preview-schedule';
import { AddEventButton } from './add-event-button';
import { Diary } from './diary';
import { Weather } from './weather';
export function DayPreview(props) {
  let daysOfAWeek = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"];
  let selectedDayEvents = props.events.filter((e) => e.date.day == props.selectedDate.day)
  return (
    <div id="day-preview">
      <div id="day-preview-title">
        <h2>{daysOfAWeek[props.selectedDate.dayOfWeek]}</h2>
      </div>
      <div id="day-preview-content">
        <Weather weather={props.weather}/>
        <div id="day-preview-stuff">
          <DayPreviewSchedule events={selectedDayEvents} deleteEvent={props.deleteEvent} toggleWindow={props.toggleWindow} />
          <AddEventButton toggleWindow={props.toggleWindow}/>
        </div>
        <Diary dayNotes={props.dayNotes} setDayNotes={props.setDayNotes} selectedDate={props.selectedDate} newNote={props.newNote}
        setNewNote={props.setNewNote}/>
      </div>
    </div>
  )
}
