let schedule = {currBreak:0,breaks:[]}

let breakSort = ( ) => {
  var tempBreaks = schedule.breaks
  if( tempBreaks.length > 1 ){
    var result = []
      while( tempBreaks.length > 0 ) {
        var soonest = 0
        for( var i = 0 ; i < tempBreaks.length ; i++ ){
          tempBreaks[i].breakStart < tempBreaks[soonest].breakStart ? soonest = i : soonest = soonest
        }
        result.push( tempBreaks[soonest] )
        tempBreaks.splice( soonest , 1 )
      }
      schedule.breaks = result
  }
}

exports.update = ( ) => {
    if( time.getMillis( ) > schedule.breaks[schedule.currBreak].breakStart ) {
      schedule.currBreak++
    }
    console.log();
}

exports.addBreak = ( breakName , breakStart , breakLength ) => {
  schedule.breaks.push( { breakName , breakStart , breakLength } )
  breakSort( )
}

exports.getBreaks = ( ) => {
  return schedule.breaks
}

exports.getCurrBreak = ( ) => {
  return schedule.breaks[schedule.currBreak]
}
