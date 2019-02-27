# Youtube-Channel-API
Simple API for accessing any Youtube channels latest videos.

![Youtube Logo](http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c545.png)

## Setup

Clone or download.

Open the cli and run `npm i` to install all dependencies.

Create a .env file in the same folder as the app.js file with a single variable called `YOUTUBE_KEY`.
This key should be your Youtube API key.

After that is setup, you can start the server by typing `npm start` or `node app.js`.

The server will be started by default on `localhost:3500` unless environment (env) variables state otherwise.

## Routes

There is only one route: `http://<ip>:<port>/api/channel?channelId=<your_channel_id>`.

The `channelId` query string should equal your channel id.

There are also optional query strings like: `order` and `maxResults`. 
These are not needed by default. The default values are `date` and `4` respectively.

You can change the `order` query string to = `viewCount` to order videos by view count (highest to lowest).

Options you can use for `order`:
* `date` – Resources are sorted in reverse chronological order based on the date they were created.
* `rating` – Resources are sorted from highest to lowest rating.
* `relevance` – Resources are sorted based on their relevance to the search query. This is the default value for this parameter.
* `title` – Resources are sorted alphabetically by title.
* `videoCount` – Channels are sorted in descending order of their number of uploaded videos.
* `viewCount` – Resources are sorted from highest to lowest number of views. For live broadcasts, videos are sorted by number of concurrent viewers while the broadcasts are ongoing.

You can change the `maxResults` query string to = `10` to specify how many videos you want (0-50).

The result url would = `http://localhost:3500/api/channel?channelId=UC52bD3Dz4mcULZtakopsSwA&order=viewCount&maxResults=10`.

