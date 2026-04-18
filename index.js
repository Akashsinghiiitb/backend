const express = require('express')
require("dotenv").config()
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hellodd gggWorld!')
})
app.get('/twitter', (req, res) => {
  res.send('yes the twitter is running')
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
