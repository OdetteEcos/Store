var express = require('express');
var app = express();
var birds = require('./server/rest/modules/sales.js');


app.get('/', function (req, res) {
  res.send('Hello World');
});

app.route('/sales')
  .get(function (req, res) {
    res.send('Get sales');
  })
  .post(function (req, res) {
    res.send('Add sale');
  });


app.use('/birds', birds);

app.listen(3000, function () {
  console.log('Example app listening in pot 3000');
});

