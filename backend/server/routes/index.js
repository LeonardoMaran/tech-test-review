module.exports = (app) => {

  app.get('/api', (req, res) => {
    return res.status(200).send({
      message: 'Welcome to the Goose FT API!',
    })
  });

  app.get('/articles', (req, res) => {
    var request = require("request");

    var options = { method: 'POST',
      url: 'http://api.ft.com/content/search/v1',
      headers:
       { 'Cache-Control': 'no-cache',
         'Content-Type': 'application/json',
         'X-Api-Key': '59cbaf20e3e06d3565778e7b222bef626a1744baa0d6e318798d127e' },
      body:
       { queryString: 'sections:"Energy"',
         resultContext: { aspects: [ 'title', 'lifecycle', 'location', 'summary', 'editorial' ] } },
      json: true };

      var util = require('util')

    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      res.status(200).send(body);
    })
  });
  
};
