import React, { useState } from 'react';
import { Tile } from './tile.js';


export function Content(props) {
  let tiles = [];
  for (let i = 0; i < 31; i++) {
    tiles.push(<Tile/>);
  }
  return (
    <div id="content">
       <div id="week-days">
         <span id="pon" className="week-day">Pon</span>
         <span id="wt" className="week-day">Wt</span>
         <span id="sr" className="week-day">Śr</span>
         <span id="czw" className="week-day">Czw</span>
         <span id="piat" className="week-day">Piąt</span>
         <span id="sob" className="week-day">Sob</span>
         <span id="niedz" className="week-day">Niedź</span>
       </div>
       <div id="day-tiles">
          {tiles}
      </div>
    </div>
  )
}
