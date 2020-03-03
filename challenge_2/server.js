const express = require('express');
const app = express();
const port = 3000;
var bodyParser = require('body-parser')

// create application/json parser
var jsonParser = bodyParser.json();

app.post('/converter', jsonParser, (req, res) => {
  console.log(req.body.text);
  res.send(req.body);
});

app.listen(port, () => console.log(`I am listening on ${port}, beware...`));

app.use('/', express.static('client'));