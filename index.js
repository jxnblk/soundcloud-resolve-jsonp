
var jsonp = require('jsonp');
var request = require('superagent');
var qs = require('qs');

var endpoint = 'https://api.soundcloud.com/resolve.json';

module.exports = function(params) {

  var params = params || {};
  var options;
  var callback;

  if (typeof arguments[1] === 'object') {
    options = arguments[1];
    callback = arguments[2];
  } else {
    options = {};
    callback = arguments[1];
  }

  var url = endpoint + '?' + qs.stringify(params);

  request.get(url).end(function(err, res) {
    try {
      if (err) throw err;
      if (!err) {
        callback(err, res);
      }
    } catch(e) {
      jsonp(url, callback);
    }
  })

};

