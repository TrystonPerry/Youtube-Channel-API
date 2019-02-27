const express = require('express');
const app = express();
const request = require('request');

require('dotenv').config();

const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search';

// Youtube Channel Route
app.get('/api/channel', function(req, res){
  
  // Get youtube api base url
  let youtube_url = YOUTUBE_URL;
  youtube_url += `/?key=${process.env.YOUTUBE_KEY}&part=snippet`;

  // Check if there is a query string for channel id
  if(req.query.channelId){
    youtube_url += `&channelId=${req.query.channelId}`;
  // If channel id is not provided, send user an error
  } else {
    return res.send({'error': 'No channelId provided'});
  }

  // How to order the videos received
  youtube_url += `&order=${req.query.order || 'date'}`

  // How many video results to receive
  youtube_url += `&maxResults=${req.query.maxResults || 4}`
  
  // Make the request with the built api url
  request(youtube_url, {json:true}, (err, response, body) => {
    // If a general error
    if(err) return res.send(err);
    // If error or invalid channel id
    if(body.error || body.items.length === 0) {
      return res.send({'error': 'Invalid channelId provided'});
    };
    // If no errors, success. Send video data
    return res.send({
      res: body.items
    });
  })

})

// Start server
app.listen(process.env.PORT || 3500, process.env.IP || '127.0.0.1', function(){
  console.log('App listening on port ' + (process.env.PORT || 3500))
})