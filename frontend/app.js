const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = 3000

const app = express();

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

// Set Static Path
app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, function(){
  console.log(`server started on port ${PORT}!`);
})
