
//Simple webserver that stores people records
//Created by Kyle Harkema for Homework2 CS 336 at Calvin College
//10-28-16

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//All the different routes
//root route that gives hello world
app.get('/', function (req, res) {
  res.send('<a href="form.html"> Add people using form </a> <br> <a href="get.html"> get person by ID </a>');
});

app.use(express.static('public'));

// host on port 3000
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

//sends list of people on route
app.get('/people/', function(req, res) {
    res.send(people);
});

//accepts adding a new person through form data
app.post('/people', function (req, res) {
    var person = new Person(req.body.firstName, req.body.lastName, req.body.id_num, req.body.dateStarted);
    people.push(person);
    res.send(person);
});

//gives detail of person with given id
app.get('/people/:id', function(req, res) {
	console.log(req.params.id);
	var id = req.params.id;
	//check if given id exists in database
	for (var i=0; i < people.length; i++) {
		if (people[i].id == id){
			res.send(people[i]);
			break;
		}
	}
	//if id does not exist send 404 error
	if (i == people.length){
		res.status(404).send('ID dosn\'t exist');
	}
	console.log("done searching")
});

//creates person with given id
app.put('/people/:id', function(req, res) {
     var person = new Person(req.body.firstName, req.body.lastName, req.params.id, req.body.dateStarted);
     people.push(person);
     res.send(person);
});

//delets person with given id
app.delete('/people/:id', function(req, res) {
	console.log(req.params.id);
	var id = req.params.id;
	//check if given id exists in database
	for (var i=0; i < people.length; i++) {
		if (people[i].id == id){
			delete (people[i]);
			break;
		}
	}
	//if id does not exist send 404 error
	if (i == people.length){
		res.status(404).send('ID dosn\'t exist');
	}
	console.log("done deleting")
});

//gives full name of person with given id
app.get('/people/:id/name', function(req,res) {
	console.log(req.params.id)
	var id = req.params.id;
	for (var i=0; i < people.length; i++) {
		if (people[i].id == id){
			res.send(people[i].firstName + ' ' + people[i].lastName);
			break;
		}
	}
	if (i == people.length){
		res.status(404).send('ID dosn\'t exist');
	}
	console.log("done searching")
});

//gives how many years given id has worked at company
app.get('/people/:id/years', function(req,res) {
	console.log(req.params.id)
	var id = req.params.id;
	for (var i=0; i < people.length; i++) {
		if (people[i].id == id){
			console.log(people[i].years())
			res.send('Has worked at company for ' + people[i].years() + ' years.');
			break;
		}
	}
	if (i == people.length){
		res.status(404).send('ID dosn\'t exist');
	}
	console.log("done searching")
});

//person class (modified from lab 2)
function Person (firstName, lastName, id, startDate) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.id = id;
	this.startDate = startDate; 
}

 //computes a persons time at company, created by Naveen Jose (modified from lab2)
 Person.prototype.years = function() {
	var start = new Date(this.startDate)
	var today = new Date();
	var years = today.getFullYear() - start.getFullYear();
	var m = today.getMonth() - start.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < start.getDate())) {
        years--;
	}
	console.log('years: ${years}');
	years = years.toString()
	return years;
}

//create people
 var person1 = new Person("Kyle", "Harkema", "1932428", "8/18/1996");
 var person2 = new Person("Andrew", "Lang", "1234567", "5/5/2005");
 var person3 = new Person("Bob", "Phil", "24", "10/3/2016");

//store all people in an array
var people = [person1, person2, person3];

