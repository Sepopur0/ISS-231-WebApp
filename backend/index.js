const express = require('express')
const app = express()
const port = 5000
const db = require("./db_oracle")
require('dotenv').config();

db.login()
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})