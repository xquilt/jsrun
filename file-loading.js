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