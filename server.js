<<<<<<< HEAD
const express = require('express')
const app = express()

app.use(express.static('public'))


app.listen(8080, function () {
  console.log('Listening on port 8080!')
}) 
=======
var express = require('express')
var app = express()


app.set('port', (process.env.PORT || 8080));

app.use(express.static('public'));
app.listen(app.get('port'), function() {
    console.log('Koblet opp til port', app.get('port'));
});

app.get('/', function(request, response) {
  response.render('pages/index');
});

>>>>>>> ee29b15a7332f08efa0bf91386fa974adbf65e29
