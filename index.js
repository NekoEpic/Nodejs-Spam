const fs = require('fs')
x = 0; 
y = 1; 
i = 0
while (x < y) {
  fs.writeFileSync(`${i}`,"Feel The Heat")
  console.log("Feel The Heat")
  i++;
}
