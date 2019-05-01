const { remote } = require( 'electron' )

function _( id ) { return document.getElementById( id ) }

let closeWindow = ( ) => {
  var win = remote.getCurrentWindow( )
  win.close( )
}

let minimizeWindow = ( ) => {
  var win = remote.getCurrentWindow( )
  win.minimize( )
}

_( 'btn-close-window' ).addEventListener( 'click' , closeWindow )
_( 'btn-minimize-window' ).addEventListener( 'click' , minimizeWindow )
