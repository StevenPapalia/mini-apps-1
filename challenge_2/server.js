const express = require('express');
const app = express();
const port = 3000;


app.post('/converter', (req, res) => {
  console.log(req.body);
  res.send('hello client');
});

app.listen(port, () => console.log(`I am listening on ${port}, beware...`));

app.use('/', express.static('client'));