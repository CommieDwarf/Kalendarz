import React, {useEffect} from "react";


export function EventWindow(props) {

  function handleCancel(event) {
    event.preventDefault();
    props.toggleWindow('hide');
  }

  function handleAdd(event) {
    event.preventDefault();
    let newEvent = props.newEvent
    newEvent.text = newEvent.text == "" ? "(Bez tytułu)" : newEvent.text;
    props.setEvents((prev) => [
      ...prev,
      newEvent
    ]);
    props.setNewEvent(props.blankEvent)

    props.toggleWindow("hide", props.event);
  }



  function handleChange(event) {
    let textInput = document.getElementById('event-content-input')
    let timeInput = document.getElementById('time-input');
    let dateInput = document.getElementById('date-input');
    props.setNewEvent({
      id: props.newEvent.id,
      date: {
        year: dateInput.value[0] + dateInput.value[1] + dateInput.value[2] + dateInput.value[3],
        month: dateInput.value[5] + dateInput.value[6],
        day: dateInput.value[8] + dateInput.value[9],
      },
      time: {
        hours: timeInput.value[0] + timeInput.value[1],
        minutes: timeInput.value[3] + timeInput.value[4]
      },
      text: textInput.value,
    })

  }

  function extractTime(time) {
    let hours = time[0] + time[1];
    let minutes = time[2] + time[3];

    return {
      hours: hours,
      minutes: minutes,
    }
  }
  function extractDate(date) {
  }




  useEffect(() => {
    if (props.action == "edit") {
      props.setNewEvent(props.event);
    } else if (props.action == "new") {
      let textInput = document.getElementById('event-content-input')
      let timeInput = document.getElementById('time-input');
      let dateInput = document.getElementById('date-input');
      props.setNewEvent({
        id: generateId(),
        date: {
          year: dateInput.value[0] + dateInput.value[1] + dateInput.value[2] + dateInput.value[3],
          month: dateInput.value[5] + dateInput.value[6],
          day: dateInput.value[8] + dateInput.value[9],
        },
        time: {
          hours: timeInput.value[0] + timeInput.value[1],
          minutes: timeInput.value[3] + timeInput.value[4]
        },
        text: document.getElementById('event-content-input').value
      })
    }
  }, [props.justOpened, props.action])

  function generateId() {
    return Math.floor(Math.random() * 100) + Date.now();
  }

  return (
    <div id="event-window" hidden={true}>
      <h3>{props.action == "new" ? 'Nowe Wydarzenie' : "Edytuj Wydarzenie"}</h3>
      <form id="add-event-form">
        <input type="time" name="time" id="time-input"
         value={props.newEvent.time.hours+":"+props.newEvent.time.minutes}/>
        <input type="date" id="date-input"
          value={props.newEvent.date.year+"-"+props.newEvent.date.month+"-"+props.newEvent.date.day}/>
        <input type="text" name="event-content" id="event-content-input" size="27"
          defaultValue={props.action == "edit" ? props.event.text : ""}
          value={props.newEvent.text}
          onChange={handleChange}/>
        <button name="add-event" id="add-event-button" onClick={handleAdd}>Dodaj wydarzenie</button>
        <button name="cancel-event" id="cancel-event-button" onClick={handleCancel}>Anuluj</button>
      </form>
    </div>
  )
}

// hidden={hidden} action={windowType} event={editEvent}
