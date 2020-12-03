import React, {useEffect} from "react";


export function EventWindow(props) {

  function handleCancel(event) {
    event.preventDefault();
    props.toggleWindow('hide');
  }
  function handleAdd(event) {
    event.preventDefault();
    props.toggleWindow(null, props.event)
  }



  function handleChange(event) {
    props.setNewEvent(event.target.value);
  }

  useEffect(() => {
    if (props.action == "edit") {
      props.setNewEvent(props.event.text);
    }
  }, [props.justOpened])
  return (
    <div id="event-window" hidden={false}>
      <h3>{props.action == "new" ? 'Nowe Wydarzenie' : "Edytuj Wydarzenie"}</h3>
      <form id="add-event-form">
        <input type="time" name="time" id="time-input"
         value={props.action == "edit" ? props.event.time.hours+":"+props.event.time.minutes : ""}/>
        <input type="date" id="date-input"
          value={props.action == "edit" ? props.event.date.year+"-"+props.event.date.month+"-"+props.event.date.day : "2018-07-22"}/>
        <input type="text" name="event-content" id="event-content-input" size="27"
          defaultValue={props.action == "edit" ? props.event.text : ""}
          value={props.newEvent}
          onChange={handleChange}/>
        <button name="add-event" id="add-event-button" onClick={handleCancel}>Dodaj wydarzenie</button>
        <button name="cancel-event" id="cancel-event-button" onClick={handleCancel}>Anuluj</button>
      </form>
    </div>
  )
}

// hidden={hidden} action={windowType} event={editEvent}
