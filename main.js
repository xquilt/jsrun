const { app, BrowserWindow, ipcRenderer, ipcMain } = require("electron")
const path = require('path')

//mainWindow.webContents.executeJavaScript(doSomething)
function createWindow(){
	// Create the browser window
	const mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
			//preload: path.join(__dirname, './main.js')
		}
	})

	// Load the index.html file of the app
	//mainWindow.webContents.on("did-finish-load", ()=> { 
	let code = `
	function doSomething(){
		console.log("hello world")
		// Code running m	<script type="text/javascript" src="code-runner.js"></script>odule
		function runCode(codeString){
			console.log(codeString)
			let sourceCode = document.getElementById("sourcecode-area").textContent
			console.log(codeString)
		}
		let runButton = document.getElementById("run-button")
		let sourceCode = document.getElementById("sourcecode-area")
		runButton.addEventListener('click', function(){runCode(sourceCode.value)})
	}
	doSomething()`
	// mainWindow.webContents.executeJavaScript(code, true)
	// })

	//ipcMain.on('code:run', function(event, parameters){
	//	console.log(parameters)
	//})

	mainWindow.webContents.openDevTools()
	//mainWindow.loadFile('main.html')
	mainWindow.loadURL('file://' + __dirname + '/main.html')

}

//app.on('ready', createWindow()) 			// These two lines do the exact same thing
app.whenReady().then(createWindow)