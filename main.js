const { app, BrowserWindow } = require("electron")

function createWindow(){
	// Create the browser window
	const window = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: true 
		}
	})
	// Load the index.html file of the app
	window.loadFile('main.html')
}

//app.on('ready', createWindow()) 			// These two lines do the exact same thing
app.whenReady().then(createWindow)
