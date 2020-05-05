'use strict'

const app_id='ae5d9c53'
const app_key='800c47cc70fbfb25f0f8f285365a4286'
const root_url=`https://external.api.yle.fi/v1/programs/items.json?`


var bodyParser = require('body-parser');

var cors = require('cors')
var express = require('express')
var app = express()
app.use(cors())
app.use( bodyParser.json() );

const https = require('https');

var server = app.listen(3000)

app.get('/tv', function (req, res) {
  https.get(`${root_url}availability=ondemand&mediaobject=video&publication.starttime:asc&app_id=${app_id}&app_key=${app_key}`, (resp) => {
    let data = '';
  
    // A chunk of data has been recieved
    resp.on('data', (chunk) => {
      data += chunk;
    });
  
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      res.json(data);
    });
  
  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
})

app.get('/radio', function(req, res) {
  https.get(`${root_url}availability=ondemand&mediaobject=audio&app_id=${app_id}&app_key=${app_key}`, (resp) => {
    let data = '';
  
    // A chunk of data has been recieved
    resp.on('data', (chunk) => {
      data += chunk;
    });
  
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      res.setHeader("Content-Type", "application/json");
      res.json(data);
    });
  
  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
})

app.get('/yletv1', function(req, res) {
  https.get(`${root_url}service=yle-tv1&publication.starttime:asc&app_id=${app_id}&app_key=${app_key}`, (resp) => {
    let data = '';
  
    // A chunk of data has been recieved
    resp.on('data', (chunk) => {
      data += chunk;
    });
  
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      res.setHeader("Content-Type", "application/json");
      res.json(data);
    });
  
  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
})

app.get('/yletv2', function(req, res) {
  https.get(`${root_url}service=yle-tv2&publication.starttime:asc&app_id=${app_id}&app_key=${app_key}`, (resp) => {
    let data = '';
  
    // A chunk of data has been recieved
    resp.on('data', (chunk) => {
      data += chunk;
    });
  
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      res.setHeader("Content-Type", "application/json");
      res.json(data);
    });
  
  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
})

app.get('/yleareena', function(req, res) {
  https.get(`${root_url}service=yle-areena&publication.starttime:asc&app_id=${app_id}&app_key=${app_key}`, (resp) => {
    let data = '';
  
    // A chunk of data has been recieved
    resp.on('data', (chunk) => {
      data += chunk;
    });
  
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      res.setHeader("Content-Type", "application/json");
      res.json(data);
    });
  
  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
})

