const fs = require('fs');

function writeToFile(path, data) {
    
    fs.appendFile(path, `${data}\n`, function (err) {
        if (err) {
            console.log("Error")
        }
        
    })
    
}

module.exports.writeToFile = writeToFile;


