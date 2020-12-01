import React from "react";

export function AddEventWindow(props) {
  return (
    <div id="add-event-window" hidden>
      <h3>Nowe Wydarzenie</h3>
      <form id="add-event-form">
        <input type="time" name="time" id="time-input" value="08:00"/>
        <input type="date" id="date-input"/>
        <input type="text" name="event-content" id="event-content-input" size="27"/>
        <button name="add-event" id="add-event-button">Dodaj wydarzenie</button>
        <button name="cancel-event" id="cancel-event-button">Anuluj</button>
      </form>
    </div>
  )
}
