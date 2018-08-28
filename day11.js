/**
 * 完整的拖拽
 */
const { map, takeUntil, concatAll, withLatestFrom } = Rx.operators;

const drag = document.getElementById('drag')

const mouseDown = Rx.fromEvent(drag, 'mousedown')
const mouseUp = Rx.fromEvent(document, 'mouseup')
const mouseMove = Rx.fromEvent(document, 'mousemove')

const validValue = (value, max, min) => {
  return Math.min(Math.max(value, min), max)
}

mouseDown.pipe(
  map(e => mouseMove.pipe(takeUntil(mouseUp))),
  concatAll(),
  withLatestFrom(mouseDown, (move, down) => {
    return {
      x: validValue(move.clientX - down.offsetX, window.innerWidth - 200, 0), 
      y: validValue(move.clientY - down.offsetY, window.innerHeight - 200, 0) 
    }
  })
)
.subscribe(pos => {
  drag.style.top = pos.y + 'px';
  drag.style.left = pos.x + 'px';
})