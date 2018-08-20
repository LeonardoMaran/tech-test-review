var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

// Set Static Path
app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000, function(){
  console.log('server started on port 3000...');
})


////how do I get to route to search?
