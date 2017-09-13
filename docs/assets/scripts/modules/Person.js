 // the following is ES6 syntax



class Person {

	constructor(fullName, favColor) {
		this.name = fullName; // 'this' keyword refers to whichever object is being created
		this.favoriteColor = favColor;
	}

	
	greet() { 
		console.log('hi there, my name is ' + this.name + ' and my favorite color is ' + this.favoriteColor + '.');
		}
}

// spell out exactly what this file should return when someone tries to require it. do that with the code below. 'exports' is an object that will be returned with a 'require' call ---> var Person = require('./modules/Person'). the exports object will literally BE the constructor function Person
// module.exports = Person;  

export default Person; // this is ES6 way to write line 19 above, which was done with node.