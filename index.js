const express = require("express")
const cors = require('cors')
const bodyParser = require("body-parser")

const app = express()

app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get("/home", (req, res) => {
    res.json("Hello World")
})

app.listen(4000, () => {
    console.log("Server Run On port 4000")
})