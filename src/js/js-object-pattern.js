// Javascript object creation patterns - Factory, constructor pattern, prototype pattern.

// Factory Pattern.
var peopleFactory = function(name, age, state) {
    var temp = {};

    temp.name = name;
    temp.age = age;
    temp.state = state;

    temp.printPerson = function() {
        console.log('Factory: ' + this.name + ', ' + this.age + ', ' + this.state);
    };

    return temp;
};

var person1 = peopleFactory('Manu', 31, 'Bangalore');
var person2 = peopleFactory('Kiran', 23, 'Jajpur');

person1.printPerson();
person2.printPerson();


// Constructor Pattern.
var peopleConstructor = function(name, age, state) {

    this.name = name;
    this.age = age;
    this.state = state;
    this.printPerson = function() {
        console.log('Constructor: '+this.name + ', ' + this.age + ', ' + this.state);
    };
};

var person3 = new peopleConstructor('Kiran', 23, 'Jajpur');
var person4 = new peopleConstructor('Manu', 31, 'Bangalore');

person3.printPerson();
person4.printPerson();

//Prototype Pattern.