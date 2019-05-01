//requires time.js

let is24hr = true
let showSeconds = true

exports.update = ( ) => {
  _( 'twentyfourhour' ).checked ? is24hr = true : is24hr = false
  _( 'showSeconds' ).checked ? showSeconds = true : showSeconds = false
  _( 'countdown-clock' ).innerHTML = `${ time.getRemaining( schedule.getCurrBreak( ).breakStart ) }`
}
