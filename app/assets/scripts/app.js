/*

--------------this is all hypothetical practice code. i left it here for study purposes------
//var Person = require('./modules/Person'); // require and import will not work until we npm install webpack. webpack will look for any required or imported files and bundle them up into one single javascript file.

import Person from './modules/Person'; // ES6 (which i got from babel) allows for importing files, negating the need for node's 'require'.

class Adult extends Person{
	// the adult class will inherit all of the person class' properties and methods
	payTaxes() {
		console.log(this.name + ' now owes $0 in taxes.')
	}
}

var john = new Person('John Doe', 'blue'); // 'new' is an operator that will create a new instance of the Person object type.
john.greet();

var jane = new Adult('Jane Smith', 'purple');
jane.greet();
jane.payTaxes();

*/

import MobileMenu from './modules/MobileMenu';

//create a new object that uses this class as a blueprint. save it to a variable to use repeatedly.
var mobileMenu = new MobileMenu();























