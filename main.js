import React, { useState, useEffect } from 'react';
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
        date: {day: "07", month: "12", year: "2020"},
        time: {
          hours: "08",
          minutes: "50",
        },
        text: "Rucham psa jak sra"
      },
      {
        id: 1,
        date: {day: "07", month: "12", year: "2020"},
        time: {
          hours: "08",
          minutes: "50",
        },
        text: "Zrobić zakupy"
      },
      {
        id: 2,
        date: {day: "07", month: "12", year: "2020"},
        time: {
          hours: "10",
          minutes: "30",
        },
        text: "Umrzeć na raka"
      },
      {
        id: 3,
        date: {day: "07", month: "12", year: "2020"},
        time: {
          hours: "21",
          minutes: "37",
        },
        text: "Puścić barkę"
      },
      {
        id: 4,
        date: {day: "07", month: "12", year: "2020"},
        time: {
          hours: "05",
          minutes: "22",
        },
        text: "Nasrać do paczkomatu"
      },
    ]
  )

  let [selectedDate, setSelectedDate] = useState(
    {
      day: currentDay,
      month: currentMonth + 1,
      year: currentYear,
      dayOfWeek: today.getDay(),
    });


    let numDays = getDaysInMonth(selectedDate);
    let thisMonthEvents = [];
    let prevMonthEvents = [];
    let nextMonthEvents = [];

    let nextMonth = getNextMonth(selectedDate.month, selectedDate.year);
    let prevMonth = getPrevMonth(selectedDate.month, selectedDate.year);

    for (let i = 0; i < events.length; i++) {
      if (events[i].date.year == selectedDate.year && events[i].date.month == selectedDate.month) {
        thisMonthEvents.push(events[i])
      } else if (events[i].date.year == prevMonth.year && events[i].date.month == prevMonth.month) {
        prevMonthEvents.push(events[i])
      } else if (events[i].date.year == nextMonth.year && events[i].date.month == nextMonth.month) {
        nextMonthEvents.push(events[i])
      }
    }

    function getPrevMonth(month, year) {
      if (month !== 1) {
        return {
          month: month - 1,
          year: year
        }
      } else {
        return {
          month: 12,
          year: year - 1
        }
      }
    }
    function getNextMonth(month, year) {
      if (month !== 12) {
        return [month + 1, year]
      } else {
        return [1, year + 1]
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

  function prependZero(number) {
    if (number < 10) {
      return "0" + number
    };
    return number
  }

  let blankEvent = {
    time: {
      hours: "00",
      minutes: "00",
    },
    date: {
      year: currentYear,
      month: prependZero(currentMonth) + 1,
      day: prependZero(currentDay),
    },
    text: "",
  }

  let [newEvent, setNewEvent] = useState(blankEvent)

  let notka = `Drogi pamiętniczku, stary przyjacielu. Piszę do Ciebie
  bo zajebiście mi się nudzi. Od wigilii - na której straciłem
  cała rodzinę (niech się smażą w piekle) przebyłem wieleset tysięcy
  kilometrów. Marzenia się spełniają. Podróżuje po kosmosie jak
  słynny tułacz z Pacanowa, ale ja w przeciwienstwie do niego nie
  chcę trafić do burdelu. Jeśli chodzi o dziewczynki -
  można powiedzieć, że jestem jaroszem. Moim konikiem jest
  turystyka. Co widziałem w kosmosie to moje. Walki gladiatorów
  na planecie Wojny...`

  let [dayNotes, setDayNotes] = useState([
    {
      id: "2020127",
      date: {
        year: 2020,
        month: 12,
        day: 7,
      },
      note: notka.replace(/\s+/g, " ")
    }
  ]);

  function chooseDayNote(notes) {
    for (let i = 0; i < notes.length; i++) {
      if (notes[i].date.year == selectedDate.year && notes[i].date.month == selectedDate.month && notes[i].date.day == selectedDate.day) {
        return notes[i];
      }
    }
  }
  let [newNote, setNewNote] = useState("");

  useEffect(() => {
    if (chooseDayNote(dayNotes)) {
      setNewNote(chooseDayNote(dayNotes).note)
    } else {
      setNewNote('');
    }
  }, [selectedDate])

  let [currentDate, setCurrentDate] = useState({
    year: today.getFullYear(),
    month: today.getMonth(),
    day: today.getDate(),
  })

  useEffect(() => {
    document.querySelectorAll('.day-tile').forEach((tile) => {
      tile.classList.remove('today-tile')
    })
    console.log(currentDate.month);
    console.log(selectedDate.month);
    if (currentDate.month + 1 == selectedDate.month) {
      document.getElementById("tile-" + currentDate.day).classList.add('today-tile');
    }
  }, [currentDate, selectedDate])


  let [weatherData, setWeatherData] = useState();
  let apiKey = '26d72d7bac713c25aa2ee85ea50d2f73';
  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Bialystok&appid=26d72d7bac713c25aa2ee85ea50d2f73`)
    .then(response => {
      return response.json();
    })
    .then(jsonResponse => {
    //  console.log(jsonResponse)
      setWeatherData(jsonResponse)
    })
    .catch(error => {
      console.error(error)
    })
  }, []);

  let [thisDayWeather, setThisDayWeather] = useState([]);

  useEffect(() => {

    if (weatherData) {
      let dayWeather = [];
      let dataList = weatherData.list
      for(let i = 0; i < dataList.length; i++) {
        let date = new Date(dataList[i]['dt'] * 1000);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let weatherIcon = dataList[i]['weather'][0]["icon"];
        let temperature = Math.round(kelvinToCelcius(dataList[i]['main']["temp"])* 10) / 10;
        if(selectedDate.year == year && selectedDate.month == month && selectedDate.day == day) {
          dayWeather.push([hour, minute, weatherIcon, temperature])
        }
      }
      setThisDayWeather(dayWeather)
    }
  }, [weatherData, selectedDate])



  function kelvinToCelcius(kelvin) {
    return kelvin - 273.15
  }




  return (
    <div>
    <YearTitle year={selectedDate.year} setSelectedDate={setSelectedDate} />
    <EventWindow event={eventToEdit}
    toggleWindow={toggleEventWindow} action={windowAction}
    setNewEvent={setNewEvent} newEvent={newEvent}
    justOpened={justOpened} setEvents={setEvents} events={events}
    blankEvent={blankEvent} eventToEdit={eventToEdit} setEventToEdit={setEventToEdit}/>
    <MonthTitle month={selectedDate.month} setSelectedDate={setSelectedDate} year={selectedDate.year}/>
    <MonthContent selectedDate={selectedDate} events={thisMonthEvents}
    numDays={numDays} nextMonthEvents={nextMonthEvents}
    prevMonthEvents={prevMonthEvents} setSelectedDate={setSelectedDate}
    newNote={newNote} setDayNotes={setDayNotes} dayNotes={dayNotes}/>
    <DayPreview selectedDate={selectedDate} events={thisMonthEvents} deleteEvent={deleteEvent}
    toggleWindow={toggleEventWindow} setDayNotes={setDayNotes}
    setNewNote={setNewNote} newNote={newNote} weather={thisDayWeather}/>
    </div>
  )
}

ReactDOM.render(<Main /> , document.getElementById('main'))
