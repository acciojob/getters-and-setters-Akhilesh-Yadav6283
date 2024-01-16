//complete this code
class Person {
	constructor(name,age){
		this._name: name;
	    this._age: age;
	}
	// getter for name
	get name(){
		return this._name;
	}
	set age(value){
	 this._age = value;
	}
}

class Student extends Person {
	constructor(name,age){
	   super(name,age);
	}
	study(){
		console.log(`${this.name} is studying`);
	}
}
class Teacher extends Person {
	constuctor(name,age){
		super(name, age);
	}
	tech(){
		console.log(`${this.name} is teaching`);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
