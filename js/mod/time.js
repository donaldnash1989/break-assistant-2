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

let stringToMillis = str => {
  var result = 0
  var h = parseInt( str.slice( 0 , 2 ) )
  var m = parseInt( str.slice( 3 , 5 ) )
  result = ( h * hourConv) + ( m * minConv )
  if( str.length > 6 ) {
    var s = parseInt( str.slice( 6 , 8 ) )
    result += ( s * secConv )
  }
  return result
}

let minutesToMillis = min => {
  return min * minConv
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

exports.getMillisString = milli => {
  return millisToString( milli )
}

exports.toMillis = str => {
  return stringToMillis( str )
}

exports.mToMillis = min => {
  return minutesToMillis( min )
}

exports.getRemaining = b => {
  var remaining = b - getTimeMillis( )

  return ( millisToString( remaining ) )
}
