import React from 'react';

export function MonthTitle(props) {
  let monthNum = props.month;
  let months = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec",
   "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];

  return (
    <div id="month-title">
    🡸  <span id="month"> <strong>{months[monthNum]}</strong> </span> 🡺
    </div>
  )
}
