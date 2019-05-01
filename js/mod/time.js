let hh = 0
let mm = 0
let ss = 0
let ms = 0
let now = null

const hourConv = 3600000
const minConv = 60000
const secConv = 1000

let getTimeMillis = ( ) => {
  return hh * hourConv + mm * minConv + ss * secConv + ms
}

let millisToString = mil => {
  var remainder = 0
  var rh = parseInt( mil / hourConv )
  remainder = mil - ( rh * hourConv )
  var rm = parseInt( remainder / minConv )
  remainder -= ( rm * minConv )
  var rs = parseInt( remainder / secConv )
  remainder -= ( rs * secConv )
  var rms = remainder
  return `${ String( rh ).padStart( 2 , '0' ) }:${ String( rm ).padStart( 2 , '0' ) }:${ String( rs ).padStart( 2 , '0' ) }`
}

exports.update = ( ) => {
  now = new Date( )
  hh = now.getHours( )
  mm = now.getMinutes( )
  ss = now.getSeconds( )
  ms = now.getMilliseconds( )
}

exports.getTime = ( is24hr , showSeconds ) => {
  if( !is24hr ) {
    if( hh > 12 ){
      hh -= 12
    }
  }
  var timeString = `${ String( hh ).padStart( 2 , '0' ) }:${ String( mm ).padStart( 2 , '0' ) }`
  showSeconds ? timeString += `:${ String( ss ).padStart( 2 , '0' ) }` : timeString += ''
  return timeString
}

exports.getMillis = ( ) => {
  return getTimeMillis( )
}

exports.toMillis = str => {
  var h = parseInt( str.slice( 0 , 2 ) )
  var m = parseInt( str.slice( 3 , 5 ) )
  return ( h * 3600000) + ( m * 60000 )
}

exports.getRemaining = b => {
  var remaining = b - getTimeMillis( )

  return ( millisToString( remaining ) )
}
