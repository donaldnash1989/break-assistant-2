const { app , BrowserWindow , globalShortcut , dialog } = require( 'electron' )

let win

/*var fs = require('fs');
fs.readFile( __dirname + '/test.txt', function (err, data) {
  if (err) {
    throw err;
  }
  console.log(data.toString());
});*/

function createWindow ( ) {

  win = new BrowserWindow( {
    width: 400,
    height: 250,
    center: false,
    fullscreen: false,
    icon: "./res/img/clock.ico",
    resizable: false,
    autoHideMenuBar: true,
    frame: false
  } )

  win.loadFile( 'index.html' )

  win.webContents.openDevTools()

  win.on( 'closed' , ( ) => {
    win = null
  } )

  globalShortcut.register( 'Escape' , ( ) => {
    win.close( )
  } )

  globalShortcut.register( 'CommandOrControl+F12' , ( ) => {
    win.webContents.openDevTools( )
  } )

  globalShortcut.register( 'CommandOrControl+F5' , ( ) => {
    win.reload( )
  } )

}

app.on( 'ready' , createWindow )

app.on( 'window-all-closed' , ( ) => {
  if ( process.platform !== 'darwin' ) {
    app.quit( )
  }
} )

app.on( 'activate' , ( ) => {
  if ( win === null ) {
    createWindow( )
  }
} )
