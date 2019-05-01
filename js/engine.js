var time = require( './js/mod/time' )
var schedule = require( './js/mod/schedule' )
var display = require( './js/mod/display' )

let iterval_id = 0
let interval = 99

let running = false

let init = ( ) => {
  _( 'btn-start' ).addEventListener( 'click' , e => {
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
    var bTime = _( 'break-time' ).value
    schedule.addBreak( _( 'break-name' ).value  , time.toMillis( bTime ) , 900000 )
    var breaks = schedule.getBreaks( )
    _( 'break-display' ).innerHTML = ''
    for( var i = 0 ; i < breaks.length ; i++ ) {
      _( 'break-display' ).innerHTML += `<p>${breaks[i].breakName} - ${breaks[i].breakStart} - ${breaks[i].breakLength}</p>`
    }
  } )
}

let update = ( ) => {

  if( running ){
    time.update( )
    schedule.update( )
    display.update( )
  }

}

init( )
interval_id = setInterval( update , interval )
