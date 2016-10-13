/* Lab6.js For CS336 at Calvin College
   By Kyle Harkema
   10-12-16
   
   Question A: All the requst methods i was able to test with these two tools.
   app.get was eaisly tested by going to the webpage, and app.all error codes could be found in chrome devtools.
   all the others were able to be tested using curl. Curl [--head] worked. and curl -X POST, PUT, DELETE, all
   worked for testing those methods.
   
   B: I would say that 404 not found is the best for it, if the route dosn't exist just tell them that it doesn't.
   
   6.2
   a. They support post and put
   b. The form data is goes through the request header under the form-data section. It is not changed
*/

process.title = "lab06";
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const httpStatus = require('http-status-codes');

const HOST = "localhost";
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static('public'));

var info = []

app.head('/request', function (req, res) {
     res.send('Received a HEAD request.\n')
})

app.get('/request', function (req, res) {
  res.send("Received a GET request.\n" + info);
});

app.post('/request', function (req, res) {
  info.push(req.body.arg);
  res.send('Got a POST request. Posted message' + req.body.arg + '.\n');
});

app.put('/request', function (req, res) {
     var i = info.indexOf(req.body.arg);
     if (i == -1) {
          info.push(req.body.arg);
          res.send('Got a PUT request the item added is: ' + req.body.arg + '.\n');
     } else {
          res.send('Got a Put request, item is in array already.\n');
     }
});

app.delete('/request', function (req, res) {
     var i = info.indexOf(req.body.arg);
     if (i > -1){
          info.splice(i, 1);  
          res.send('Got a DELETE request Deleted: ' + req.body.arg + '.\n');
     } else {
          res.send('Got a DELETE request Item was not in the array.\n')
     }
});

app.post('/forms', function(req, res) {
	res.send('Got a POST request'
  			+'<br>Posted name: <code>'+req.body.user_name+'</code>'
  			+'<br>Posted email: <code>'+req.body.user_mail+'</code>'
  			+'<br>Posted message: <code>'+req.body.user_message+'</code>')
});
  				

app.all('*', function (req,res) {
	res.sendStatus(httpStatus.FORBIDDEN);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
