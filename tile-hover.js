let tilesDiv = document.getElementById('day-tiles');
let prevTile;


tilesDiv.addEventListener('mouseover', function(event) {
  let tile = event.target.closest('.day-tile')

  if (!tile) return;
  if (tile.classList.contains('selected-tile')) {;
    return;
  }
  if (tile.classList.contains('selected-tile')) {
    tile.classList.add('highlight-selected-tile');
  } else {
    tile.classList.add('highlight-tile');
  }

})

tilesDiv.addEventListener('mouseout', function(event) {
  let tile = event.target.closest('.day-tile');
  if (!tile) return;
  tile.classList.remove('highlight-tile');
  tile.classList.remove('highlight-selected-tile');
})
