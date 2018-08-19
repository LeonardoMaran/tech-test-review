module.exports = (app) => {
  
  app.get('/api', (req, res) => {
    return res.status(200).send({
      message: 'Welcome to the Goose FT API!',
    })
  });

};
