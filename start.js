const writeToFile = require('./append')

const file = "info.txt"
const someText = "This is an appended text"



writeToFile.writeToFile(file, someText)



