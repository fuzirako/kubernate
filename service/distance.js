var request = require('request');
 
const apiKey = process.env.ZIPCODE_API_KEY || "DemoOnly00xM8GfwlIQE2Jf2FneBr1uZBPGCw3W8DzyZjKoPaVCRGamRCaclrpVR";
const zipCodeURL = 'https://www.zipcodeapi.com/rest/';
 
var distance = {
  find: function(req, res, next) {
      request(zipCodeURL + apiKey
              + '/distance.json/' + req.params.zipcode1 + '/'
              + req.params.zipcode2 + '/mile',
      function (error, response, body) {
          if (!error && response.statusCode == 200) {
              response = JSON.parse(body);
              res.send(response);
          } else {
              console.log(response.statusCode + response.body);
              res.send({distance: -1});
          }
      });
 
  }
};
 
module.exports = distance;
