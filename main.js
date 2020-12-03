import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { EventWindow } from "./components/event-window";
import { MonthTitle } from "./components/month-title";
import { MonthContent } from "./components/month-content";
import { DayPreview } from "./components/day-preview"
import { YearTitle } from "./components/year-title";


function Main(props) {

  let today = new Date();
  let currentYear = today.getFullYear();
  let currentMonth = today.getMonth();
  let currentDay = today.getDate();
  let currentDayOfWeek = today.getDay();
  let currentHour = today.getHours();
  let currentMinute = today.getMinutes();

  let [events, setEvents] = useState(
    [
      {
        id: 0,
        date: {day: "03", month: "11", year: "2020"},
        time: {
          hours: "08",
          minutes: "50",
        },
        text: "Rucham psa jak sra"
      },
    ]
  )

  let [selectedDate, setSelectedDate] = useState(
    {
      day: currentDay,
      month: currentMonth,
      year: currentYear,
    });


    let numDays = getDaysInMonth(selectedDate);
    let thisMonthEvents = [];

    for (let i = 0; i < events.length; i++) {
      if (events[i].date.year == selectedDate.year && events[i].date.month == selectedDate.month) {
        thisMonthEvents.push(events[i])
      }
    }

    function getDaysInMonth(date) {
      let lastDay = new Date(date.year, date.month + 1, 0);
      return lastDay.getDate();
    }

    function deleteEvent(eventId) {
      setEvents(events.filter((e) => e.id != eventId
      ))
    }

    let [windowAction, setWindowAction] = useState("");
    let [eventToEdit, setEventToEdit] = useState();
    let [justOpened, setJustOpened] = useState(false);

    function toggleEventWindow(action, e) {
      eventWindow = document.getElementById('event-window');
      if (eventWindow.hidden == true) {
        setJustOpened(!justOpened);
        eventWindow.hidden = !eventWindow.hidden;
        setJustOpened(!justOpened);
      } else if (windowAction == action) {
        eventWindow.hidden = !eventWindow.hidden;
        setJustOpened(!justOpened);
      } else if (action == "hide") {
        eventWindow.hidden = !eventWindow.hidden;
      }
      setWindowAction(action)
      setEventToEdit(e);

    }

    let [newEvent, setNewEvent] = useState();


  return (
    <div>
      <YearTitle year={selectedDate.year} />
      <EventWindow event={eventToEdit} toggleWindow={toggleEventWindow} action={windowAction} setNewEvent={setNewEvent} newEvent={newEvent} justOpened={justOpened}/>
      <MonthTitle month={selectedDate.month}/>
      <MonthContent selectedDate={selectedDate} events={thisMonthEvents} numDays={numDays}/>
      <DayPreview selectedDate={selectedDate} events={thisMonthEvents} deleteEvent={deleteEvent} toggleWindow={toggleEventWindow}/>
    </div>
  )
}

ReactDOM.render(<Main /> , document.getElementById('main'))
