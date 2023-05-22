var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://api.thetavideoapi.com/stream',
  'headers': {
    'x-tva-sa-id': 'srvacc_xxxxxxxxxxxxxxxxxxxxxxxxx',
    'x-tva-sa-secret': 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({"name":"demo", "resolutions":["160p","240p","360p","720p","source"], "source_resolution":"720p", "fps":60})
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});