import React, { useState } from 'react';

export function DayPreview(props) {
  return (
    <div id="day-preview">
      <div id="day-preview-title">
        <h2>Wtorek</h2>
      </div>
      <div id="day-preview-content">
        <div id="day-preview-schedule">
          <div id="day-events">
            <div id="event-1" className="event">
              <div className="event-time-div">
                <div id="event-time-1" className="event-time">
                  8:00
                </div>
              </div>
              <div id="event-content-1" className="event-content">
              Umyć okna
              </div>
              <div className="event-menu">
                <div className="event-edit">
                  <i className="icon-pencil"></i>
                </div>
                <div className="event-remove">
                  <i className="icon-trash-empty"></i>
                </div>
              </div>
            </div>
            <div id="event-2" className="event">
              <div className="event-time-div">
                <div id="event-time-1" className="event-time">
                  21:37
                </div>
              </div>
              <div id="event-content-1" className="event-content">
              Nasrać do paczkomatu
              </div>
              <div className="event-menu">
                <div className="event-edit">
                  <i className="icon-pencil"></i>
                </div>
                <div className="event-remove">
                  <i className="icon-trash-empty"></i>
                </div>
              </div>
            </div>
            <div id="event-3" className="event">
              <div className="event-time-div">
                <div id="event-time-1" className="event-time">
                  19:22
                </div>
              </div>
              <div id="event-content-1" className="event-content">
              Zrobić zakupy
              </div>
              <div className="event-menu">
                <div className="event-edit">
                  <i className="icon-pencil"></i>
                </div>
                <div className="event-remove">
                  <i className="icon-trash-empty"></i>
                </div>
              </div>
            </div>
            <div id="event-1" className="event">
              <div className="event-time-div">
                <div id="event-time-1" className="event-time">
                  8:45
                </div>
              </div>
              <div id="event-content-1" className="event-content">
              Umyć okna
              </div>
              <div className="event-menu">
                <div className="event-edit">
                  <i className="icon-pencil"></i>
                </div>
                <div className="event-remove">
                  <i className="icon-trash-empty"></i>
                </div>
              </div>
            </div>
            <div id="event-2" className="event">
              <div className="event-time-div">
                <div id="event-time-1" className="event-time">
                  20:05
                </div>
              </div>
              <div id="event-content-1" className="event-content">
              Nasrać do paczkomatu
              </div>
              <div className="event-menu">
                <div className="event-edit">
                  <i className="icon-pencil"></i>
                </div>
                <div className="event-remove">
                  <i className="icon-trash-empty"></i>
                </div>
              </div>
            </div>
            <div id="event-3" className="event">
              <div className="event-time-div">
                <div id="event-time-1" className="event-time">
                  3:20
                </div>
              </div>
              <div id="event-content-1" className="event-content">
              Zrobić zakupy
              </div>
              <div className="event-menu">
                <div className="event-edit">
                  <i className="icon-pencil"></i>
                </div>
                <div className="event-remove">
                  <i className="icon-trash-empty"></i>
                </div>
              </div>
            </div>
            <div id="event-3" className="event">
              <div id="event-time-1" className="event-time">
                -
              </div>
              <div id="event-content-1" className="event-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Duis sit amet leo ac
              </div>
              <div className="event-menu">
                <div className="event-edit">
                  <i className="icon-pencil"></i>
                </div>
                <div className="event-remove">
                  <i className="icon-trash-empty"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="add-event-div">
          <button id="new-event-button">
          Nowe wydarzenie
          </button>
        </div>
        <div id="preview-diary-div">
          <textarea id="preview-diary-textarea" cols="100" value="Drogi pamiętniczku, stary przyjacielu. Piszę do Ciebie bo zajebiście mi się nudzi. Od wigilii - na której straciłem cała rodzinę (niech się smażą w piekle) przebyłem wieleset tysięcy kilometrów. Marzenia się spełniają. Podróżuje po kosmosie jak słynny tułacz z Pacanowa, ale ja w przeciwienstwie do niego nie chcę trafić do burdelu. Jeśli chodzi o dziewczynki - można powiedzieć, że jestem jaroszem. Moim konikiem jest turystyka. Co widziałem w kosmosie to moje. Walki gladiatorów na planecie Wojny. Chujowy kutasenat (jakie tam są ogrody..)"></textarea>
        </div>
      </div>
    </div>
  )
}
