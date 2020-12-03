import React from 'react';

export function AddEventButton(props) {
  function handleAdd(event) {
    event.preventDefault();
    props.toggleWindow('new')
  }
  return (
    <div id="add-event-div">
      <button id="new-event-button" onClick={handleAdd}>
      Nowe wydarzenie
      </button>
    </div>
  )
}
