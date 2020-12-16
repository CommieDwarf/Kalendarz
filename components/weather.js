import React, {useEffect, useState} from 'react';

export function Weather(props) {
  let weather = props.weather;
  let weatherList;
  let [dataLoaded, setDataLoaded] = useState(false);
  useEffect(() => {
    if (weather.length > 0) {
      weatherList = weather.map((w) => {
        return (
          <div className="hourly-weather">
            <div className="hourly-weather-subdiv">
              <img src={`img/weather.icons/${w[2]}.png`} />
              <div className="temperature">
                <i className="icon-temperatire"></i>
                <span className="degrees">{w[3]}</span>
              </div>
            </div>
            <span className="weather-hour">{formatTime(w[0])+":" + formatTime(w[1])}</span>
          </div>
        )
      })
      console.log(weatherList)
    }
    setDataLoaded(true);

  }, [weather])


  function formatTime(time) {
    if (time < 10) {
      return "0" + time;
    } else {
      return time;
    }
  }



  return (
    <div id="weather-div">
      {weatherList}
    </div>
  )
}
