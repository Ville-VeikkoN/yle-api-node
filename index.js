'use strict'

const app_id='ae5d9c53'
const app_key='800c47cc70fbfb25f0f8f285365a4286'
const root_url=`https://external.api.yle.fi/v1/programs/`


var bodyParser = require('body-parser');

var cors = require('cors')
var express = require('express')
var app = express()
app.use(cors())
app.use( bodyParser.json() );
app.use(express.static(process.cwd()+"/yle-api/dist/yle-api/"));

const https = require('https');

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

app.use(express.static(process.cwd()+"./yle-api/dist/yle-api/"));

app.get('/tv', function (req, res) {
  https.get(`${root_url}items.json?availability=ondemand&mediaobject=video&publication.starttime:asc&app_id=${app_id}&app_key=${app_key}`, (resp) => {
    let data = '';
  
    resp.on('data', (chunk) => {
      data += chunk;
    });
  
    resp.on('end', () => {
      res.json(data);
    });
  
  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
});

app.get('/radio/:radioChannel', function(req, res) {
  https.get(`${root_url}services/${req.params.radioChannel}.json?app_id=${app_id}&app_key=${app_key}`, (resp) => {
    let data = '';
  
    resp.on('data', (chunk) => {
      data += chunk;
    });
  
    resp.on('end', () => {
      res.setHeader("Content-Type", "application/json");
      res.json(data);
    });
  
  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
});

app.get('/radio/nowplaying/:radioChannel', function(req, res) {
  https.get(`${root_url}nowplaying/${req.params.radioChannel}.json?app_id=${app_id}&app_key=${app_key}`, (resp) => {
    let data = '';
  
    resp.on('data', (chunk) => {
      data += chunk;
    });
  
    resp.on('end', () => {
      res.setHeader("Content-Type", "application/json");
      res.json(data);
    });
  
  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
});

app.get('/yletv1', function(req, res) {
  https.get(`${root_url}schedules.json?service=yle-tv1&availability=ondemand&app_id=${app_id}&app_key=${app_key}`, (resp) => {
    let data = '';
  
    resp.on('data', (chunk) => {
      data += chunk;
    });
  
    resp.on('end', () => {
      res.setHeader("Content-Type", "application/json");
      res.json(data);
    });
  
  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
});

app.get('/yletv2', function(req, res) {
  https.get(`${root_url}schedules.json?service=yle-tv2&availability=ondemand&app_id=${app_id}&app_key=${app_key}`, (resp) => {
    let data = '';
  
    resp.on('data', (chunk) => {
      data += chunk;
    });
  
    resp.on('end', () => {
      res.setHeader("Content-Type", "application/json");
      res.json(data);
    });
  
  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
});

app.get('/yleareena', function(req, res) {
  https.get(`${root_url}schedules.json?service=yle-areena&availability=ondemand&app_id=${app_id}&app_key=${app_key}`, (resp) => {
    let data = '';
  
    resp.on('data', (chunk) => {
      data += chunk;
    });
  
    resp.on('end', () => {
      res.setHeader("Content-Type", "application/json");
      res.json(data);
    });
  
  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
});

app.get('/searched/:searchValue', function(req, res) {
  https.get(`${root_url}items.json?q=${req.params.searchValue}&app_id=${app_id}&app_key=${app_key}`, (resp) => {
    let data = '';
  
    resp.on('data', (chunk) => {
      data += chunk;
    });
  
    resp.on('end', () => {
      res.setHeader("Content-Type", "application/json");
      res.json(data);
    });
  
  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
});


