var request = require('request');
var options = {
  'method': 'PUT',
  'url': 'https://storage.googleapis.com/files.thetavideoapi.com/srvacc_1f3z0062ij26bu1pa8h65we6h/upload_4d0j6tx7nbwmv96sp7y7uz550?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=beta-tva-dispatcher-sa%40beta-theta-video-api.iam.gserviceaccount.com%2F20210930%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20210930T161215Z&X-Goog-Expires=900&X-Goog-SignedHeaders=content-type%3Bhost&X-Goog-Signature=6522b1df0d2c1dc583cc9ae1a4f357b1a176c72da6d3f3c52516b024a75b35afcea1570fba165a0516607a55c79d7032509558c11126a09d8380c9d5fcbb505652c6d461dcb8277a281a5ab24e19ac34dc4431d25fcbc99e4022c6cc835fc6d2602fd99b89c01639fdff6d5175ed857452213b6946a1e0c611f1fc5608357d34687abc90dff7559ac1770d5093a454a24d52676566373c5238732ff2984ac411601972f8e595e8f0419ec96f24ca893b08a21c45ec4ddc455b047326b60018fe5a5e0ab646bacac37f3a4f340f1f41cf3ab985bd48a226984f238fd3c5ba48851b4be981b76d138f0fb06af6af358709e7fc58d721c1ef991d23fd8953dd1c7f',
  'headers': {
    'Content-Type': 'application/octet-stream'
  },
  body: "<file contents here>"

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});