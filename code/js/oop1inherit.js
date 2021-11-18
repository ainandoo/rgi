// Sebuah class
class Person {
    constructor(first, last, age, gender, interests) {
        this.name = {
        first,
        last
        };
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }

    greeting() {
        console.log(`Hi! I'm ${this.name.first}`);
    };

    farewell() {
        console.log(`${this.name.first} has left the building.`);
    };
}
    
// object instance 1 dari class
let han = new Person('Mister', 'Ainan', 25, 'male', ['Smuggling']);
han.greeting();

// object instance 2 dari class
let leia = new Person('Leia', 'Organa', 19, 'female' ['Government']);
leia.farewell();


// class inheritance
class Teacher extends Person {
    constructor(first, last, age, gender, interests, subject, grade) {
        super(first, last, age, gender, interests);
        
        this.subject = subject;
        this.grade = grade;
    }
}

let snape = new Teacher('Severus', 'Snape', 58, 'male', ['Potions'], 'Dark arts', 5);
snape.greeting();
snape.farewell(); 
console.log(snape.age)
console.log(snape.subject)




