var fs = require('fs') //import filesystem library into variable fs
countLines(fs.readFileSync(process.argv[2])) //running countLines function with command line arguments

function countLines (text) { //function that counts lines
  var lineCount = text.toString().split('\n').length - 1 //use .split and .length to get the lineCount
  console.log(lineCount) //print to console log
}
