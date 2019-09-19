let express = require('express')
let app = express()

app.listen(3000)

console.log("server listening on port 3000")

app.use(express.static('..'))
// open("http://localhost:3000");
