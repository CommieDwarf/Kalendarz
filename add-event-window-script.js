
let eventWindow = document.getElementById('event-window');



eventWindow.onmousedown = function(event) {
  if (event.target.tagName == "INPUT" || event.target.tagName == "BUTTON" ) return;

  let shiftX = event.clientX - eventWindow.getBoundingClientRect().left;
  let shiftY = event.clientY - eventWindow.getBoundingClientRect().top;

 eventWindow.style.position = 'absolute';
 eventWindow.style.zIndex = 1000;
 document.body.append(eventWindow);

  moveAt(event.pageX, event.pageY);
 // moves the ball at (pageX, pageY) coordinates
 // taking initial shifts into account
 function moveAt(pageX, pageY) {
   eventWindow.style.left = pageX - shiftX + 'px';
   eventWindow.style.top = pageY - shiftY + 'px';
 }

 if (event.target.tagName !== 'INPUT' && event.target.tagName !== 'BUTTON') {
    document.addEventListener('mousemove', onMouseMove)
 }

 function onMouseMove(event) {
     moveAt(event.pageX, event.pageY)
 }

 function removeDrag(event) {
   document.removeEventListener('mousemove', onMouseMove);
 }

 eventWindow.addEventListener('mouseup', removeDrag)
eventWindow.onmouseup = null;

}
