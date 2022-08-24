const fetch = require('node-fetch')

let remoteFileUrl = "https://raw.githubusercontent.com/z0xyz/pdfDecrypt/main/README.m"

function loadRemoteFile(fileUrl){
    fetch(fileUrl)
        .then(responseObject => responseObject.text())
        .then(text => console.log(text))
        .finally(() => {
            console.log("File finished loading!")
        })
}

loadRemoteFile(remoteFileUrl)

// Adding event listener for file tabs
let loadedFileTabs = document.querySelectorAll('.loadedFileTab')
for(let i=0; i<loadedFileTabs.length; i++){
    loadedFileTabs.item(i).addEventListener('click', function(event){
        let clickedFileTabName = event.target.textContent
        // Alter the source code area's content with the just-clicked loaded file content
        document.getElementById('sourcecode-area').textContent = document.getElementById(clickedFileTabName).textContent
    })
}
