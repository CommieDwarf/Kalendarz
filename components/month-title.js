import React from 'react';

export function MonthTitle(props) {
  let monthNum = props.month;
  let months = [null, "Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec",
   "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];



  function nextMonth() {
    monthNum ++;
    if (monthNum > 12) {
      monthNum = 1;
      props.setSelectedDate((prev) => ({
        ...prev,
        year: props.year + 1,
        day: "",
      }))
    }
    props.setSelectedDate((prev) => ({
      ...prev,
      month: monthNum,
      day: "",
    }))
    unselectAll();
  }

  function prevMonth() {
    monthNum --;
    if (monthNum < 1) {
      monthNum = 12;
      props.setSelectedDate((prev) => ({
        ...prev,
        year: props.year - 1,
        day: "",
      }))
    }
    props.setSelectedDate((prev) => ({
      ...prev,
      month: monthNum,
      day: "",
    }))
    unselectAll();
  }

  function unselectAll() {
    let tiles = document.querySelectorAll('.day-tile')
    tiles.forEach((tile) => tile.classList.remove('selected-tile'));
  }

  return (
    <div id="month-title">
    <span id="previous-month" onClick={prevMonth}>🡸</span>  <span id="month"> <div id="month"><strong>{months[monthNum]}</strong></div> </span> <span id="next-month" onClick={nextMonth}>🡺</span>
    </div>
  )
}
