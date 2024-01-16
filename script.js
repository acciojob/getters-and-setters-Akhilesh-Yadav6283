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
// const person = new Person("Akhilesh", 23);
// console.log(person.name);
const student = new Student("Akhilesh", 23);
console.log(student.name);
student.study();

const teacher = new Teacher("Professor Smith", 35);
console.log(teacher.name); // Output: Professor Smith
teacher.teach();

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
