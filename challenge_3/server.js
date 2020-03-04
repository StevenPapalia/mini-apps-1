const express = require('express');
const app = express();
const port = 3000;
var bodyParser = require('body-parser')

var jsonParser = bodyParser.json();

app.get('/api', (req, res) => {
  console.log('this worked');
  res.send('Hello the World!');
});

app.post('/api', jsonParser, (req, res) => {
  console.log(req.body);
  res.send('Hello the World!');
});

app.use(express.static('public'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
