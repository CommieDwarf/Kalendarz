import React, { useState } from 'react';
import { DayPreviewSchedule } from './day-preview-schedule';
import { AddEventButton } from './add-event-button';
import { Diary } from './diary';

export function DayPreview(props) {
  let daysOfAWeek = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"];
  return (
    <div id="day-preview">
      <div id="day-preview-title">
        <h2>{daysOfAWeek[props.selectedDate.day]}</h2>
      </div>
      <div id="day-preview-content">
        <DayPreviewSchedule />
        <AddEventButton />
        <Diary />
      </div>
    </div>
  )
}
