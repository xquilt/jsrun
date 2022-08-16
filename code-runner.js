const electron = require('electron')
const { ipcRenderer } = electron 
const { spawn }  = require("node:child_process")
//const { getCurrentWindow, globalShortcut } = require('electron').remote;

let runButton = document.getElementById("run-button")

// This predefined inner text value is just for testing (To evade retyping the text area source code content every time)
document.getElementById("sourcecode-area").textContent = `
	console.log('hi')
	let value = 'other vlaue'
	console.log(value)
	function doThat(parameterHere){
		console.log('The value of the parameter is ' + parameterHere)
	}
	doThat('GamingScan')
`

runButton.addEventListener('click', function(){runCode()})
function runCode(){
	//document.getElementById("sourcecode-area").textContent = "What the fuck"

	//getCurrentWindow.reload();
	let sourceCode = document.getElementById("sourcecode-area").value
	const nodeOutput = spawn('node', ['-e', sourceCode])
	nodeOutput.stdout.on('data', (data) => {
		console.log(data.toString())
	})

}

// Ipc communication
//ipcRenderer.send('code:run', sourcecode)
