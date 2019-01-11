const express = require('express') //express framework
const requestModule = require('request') //npm module for easy http requests
const https = require('https') //food2fork now requires https
let http = require('http')
let url = require('url')
let qstring = require('querystring')

const PORT = process.env.PORT || 3000
/*YOU NEED AN APP ID KEY TO RUN THIS CODE
  GET ONE BY SIGNING UP AT openrecipemap.org
*/
const API_KEY = 'c61765e2674efd63b9af28987b1d735cfaece6e9'

const app = express()

//Middleware
// static file serve
app.use(express.static(__dirname + '/public'))
// not found in static files, so default to index.html

app.get(`/*`, (request, response) => {
  response.sendFile(__dirname + '/views/index.html')
})


//start server
app.listen(PORT, err => {
  if(err) console.log(err)
  else {
    console.log(`Server listening on port: ${PORT}`)
    console.log(`To Test:`)
    console.log(`http://localhost:3000`)

  }
})
