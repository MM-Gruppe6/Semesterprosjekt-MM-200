const express = require('express')
const app = express ()

app.use(express.static ('public'))

var myArry = ["Velkommen ];
   

app.listen(process.env.PORT || 8080, function (){
    console.log('Example app listening on port 8080!')
    //console.log(greet());
   
})