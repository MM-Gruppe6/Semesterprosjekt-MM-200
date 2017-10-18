var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 8080));

app.use(express.static('/public'));

app.get('/', function(request, response) {
  response.render('pages/index');
});


app.listen(app.get('port'), function() {
    console.log('Koblet opp til port', app.get('port'));
});