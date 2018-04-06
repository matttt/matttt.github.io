let express = require('express')
let open = require("open");
let app = express()

app.listen(3000)

console.log("server listening on port 3000")

app.use('/', (req, res, next) => {
  express.static("..")(req, res, next);
})

open("http://localhost:3000");
