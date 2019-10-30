const fs = require('fs');

function writeToFile(path, data) {

    
    fs.appendFile('info.text', "line 1\n", function (err) {
        if (err) {
            console.log("Error")
        }
        
    })
    
}

module.exports.writeToFile = writeToFile;


