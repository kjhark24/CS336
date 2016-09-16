//Created by Kyle Harkema
//9-14-16

//person class 
function Person (name, birthDate) {
	this.name = name;
	this.birthDate = new Date(birthDate); 
	this.friends = [];
	}

 //computes a persons age, created by Naveen Jose
 Person.prototype.getAge = function() {
	var today = new Date();
	var age = today.getFullYear() - this.birthDate.getFullYear();
	var m = today.getMonth() - this.birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
	}
	console.log(`age: ${age}`);
	return age;
}

//adds friend to person
 Person.prototype.addFriend = function(friend) {
	this.friends.push(friend);
 }

 // greeting for person
 Person.prototype.greet = function() {
	console.log(`Hello i am ${this.name}`);
 }

 //changes a persons name
 Person.prototype.nameChange = function(newName) {
	this.name = newName;
 }

 //prints out a persons name
 Person.prototype.showFriends = function(){
	var length = this.friends.length;
	for (var i = 0; i < length; i++) {
		f = this.friends[i];
		console.log(`I'm ${this.name} and I have a friend named ${f.name}`);
	}
 }

 //creates a student object, inherits features from person
 function Student(name, birthDate, study) {
	Person.call(this, name, birthDate);
	this.study = study;
 }

 //student inherits properties of person
 Student.prototype = Object.create(Person.prototype);

 //prints a greeting from the student
 Student.prototype.greet = function() {
	console.log(`hello i am a student named ${this.name} studying ${this.study}`)
 }
 
//create people
 var person1 = new Person("Kyle", "8/18/1996");
 var person2 = new Person("Andrew", "5/5/2005");

 //test things
 person1.greet();
 person1.getAge();
 person1.addFriend(person2);
 person1.addFriend(person1);
 person2.greet();
 person2.getAge();
 person2.addFriend(person1);
 person1.showFriends();
 person2.nameChange("WEEABOO");
 person2.greet();

 //create student
 var student1 = new Student("Kris", "6/2/1886", "CompSci");
 //test new student things
 student1.greet();
 student1.getAge();
 student1.addFriend(person1);
 person1.addFriend(student1);
 person1.showFriends();
 person2.showFriends();
//show inheritance
console.log(`Student a Person? ${student1 instanceof Person}`);
console.log(`Student a Student? ${student1 instanceof Student}`);
 
