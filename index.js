const fs = require('fs')
var x = 0; 
var y = 1; 
var i = 0
while (x < y) {
  fs.writeFileSync(`${i}`,"Feel The Heat")
  console.log("Feel The Heat")
  i++;
}
