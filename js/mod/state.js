let currentState

let stateEnum = { 'SETUP' : 0 , 'WAITING' : 1 , 'LATE_TO_BREAK' : 2 , 'ON_BREAK' : 3 , 'LATE_FROM_BREAK' : 4 , 'EXIT' : 5 }

exports.init = ( ) => {
  Object.freeze( stateEnum )
  currentState = stateEnum.SETUP
}

exports.getState = ( ) => {
  return currentState
}

exports.nextState = ( isLate , exit ) => {

  isLate == undefined ? isLate = true : isLate = isLate
  exit == undefined ? exit = false : exit ? currentState = stateEnum.EXIT : currentState = currentState

  switch( currentState ) {
    case stateEnum.SETUP:
      currentState = stateEnum.WAITING
      break
    case 1:
      isLate ? currentState = stateEnum.LATE_TO_BREAK : currentState = stateEnum.ON_BREAK
      break
    case 2:
      currentState = stateEnum.ON_BREAK
      break
    case 3:
      isLate ? currentState = stateEnum.LATE_FROM_BREAK : currentState = stateEnum.WAITING
      break
    case 4:
      currentState = stateEnum.WAITING
      break
    case 5:
      currentState = stateEnum.SETUP
      break
  }
  
}
