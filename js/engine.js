var utils = require( './js/mod/utils' )
var time = require( './js/mod/time' )
var schedule = require( './js/mod/schedule' )
var state = require( './js/mod/state' )
var display = require( './js/mod/display' )

let iterval_id = 0
let interval = 99

let running = false

let init = ( ) => {
  display.init( )
  state.init( )
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
