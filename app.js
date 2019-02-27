const express = require('express');
const app = express();

const YOUTUBE_URL = process.env.YOUTUBE_URL;

app.get('/api/channel', function(req, res){
  
})

app.listen(process.env.PORT || 3500, process.env.IP || '127.0.0.1', function(){
  console.log('App listening on port ' + (process.env.PORT || 3500))
})