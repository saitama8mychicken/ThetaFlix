var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://api.thetavideoapi.com/stream/stream_xxxxxxxxxxxxxxxxxxxxxxxxx/clips',
  'headers': {
    'x-tva-sa-id': 'srvacc_xxxxxxxxxxxxxxxxxxxxxxxxx',
    'x-tva-sa-secret': 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});