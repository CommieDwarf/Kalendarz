import React from 'react';

export function Diary(props) {
  function handleChange({target}) {
    props.setNewNote(target.value)
  }

  return (
    <div id="preview-diary-div">
      <textarea id="preview-diary-textarea" cols="100" value={props.newNote} onChange={handleChange}></textarea>
    </div>
  )
}
