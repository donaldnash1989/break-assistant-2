//requires time.js

let is24hr = true
let showSeconds = true

let startBtn = _( 'btn-start' )
let selectDuration = _( 'select-duration' )

let addBreakBtn = ( ) => {
  var bTime = _( 'break-time' ).value
  var dur = Number( selectDuration.options[ selectDuration.selectedIndex ].value )
  schedule.addBreak( _( 'break-name' ).value  , time.toMillis( bTime ) , time.mToMillis( dur ) )
  var breaks = schedule.getBreaks( )
  _( 'break-display' ).innerHTML = ''
  for( var i = 0 ; i < breaks.length ; i++ ) {
    _( 'break-display' ).innerHTML += `<p class="break-card"><span class="break-card-name">${breaks[i].breakName}</span> - <span class="break-card-start">${time.getMillisString(breaks[i].breakStart)}</span> - <span class="break-card-duration">${time.getMillisString(breaks[i].breakLength)}</span></p>`
  }
}

exports.init = ( ) => {
  startBtn.addEventListener( 'click' , e => {
    if( !running ){
      _( 'schedule-entry-menu' ).style.opacity = '0'
      _( 'countdown-clock' ).style.opacity = '1'
      _( 'btn-start' ).classList.add('powered-on')
        running = true
    }else{
      _( 'schedule-entry-menu' ).style.opacity = '1'
      _( 'countdown-clock' ).style.opacity = '0'
      _( 'btn-start' ).classList.remove('powered-on')
        running = false
    }
  } , false )

  _( 'btn-toggle-settings' ).addEventListener( 'click' , e => {
    if( _( 'settings-menu' ).style.opacity === '1' ) {
      _( 'settings-menu' ).style.opacity = '0'
      _( 'settings-menu' ).style.pointerEvents = 'none'
    } else {
      _( 'settings-menu' ).style.opacity = '1'
      _( 'settings-menu' ).style.pointerEvents = 'initial'
    }
  } , false )

  _( 'btn-add-break' ).addEventListener( 'click' , e => {
    addBreakBtn( )
  } )

  _( 'btn-add-break' ).addEventListener( 'keydown' , e => {
    if( e.key === 'Enter' ) {
      addBreakBtn( )
    }
  } )
}

exports.update = ( ) => {
  _( 'twentyfourhour' ).checked ? is24hr = true : is24hr = false
  _( 'showSeconds' ).checked ? showSeconds = true : showSeconds = false
  _( 'countdown-clock' ).innerHTML = `${ time.getRemaining( schedule.getCurrBreak( ).breakStart ) }`
}
