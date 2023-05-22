var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://api.thetavideoapi.com/video',
  'headers': {
    'x-tva-sa-id': 'srvacc_xxxxxxxxxxxxxxxxxxxxxxxxx',
    'x-tva-sa-secret': 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({"source_upload_id":"upload_zzzzzzzzzzzzzzzzzzzzzzzzz","playback_policy":"public","nft_collection":"0x5d0004fe2e0ec6d002678c7fa01026cabde9e793"})

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});