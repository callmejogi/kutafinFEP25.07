class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getInfo (){
        console.log(`${this.name}, ${this.age} y.o`)
    }

}

class Car {
    constructor(brand, model, age, country){
        this.brand = brand;
        this.model = model;
        this.age = age;
        this.country = country;
        this.owner = null;
    };

    addOwner(owner){
        if (owner.age > 18 ){
            this.owner = owner;
        } else {
          console.log("I`m so sorry u r underaged, допобачення");
        }
    };

    getInfo(){
        console.log(`Auto:${this.brand}, ${this.model}, ${this.age}, ${this.country}`);
        if (this.owner) {
            console.log("Інформація про власника:");
            this.owner.getInfo();
          } else {
            console.log("No owner");
          }
        }

}

const Person1 = new Person("George", 21);
const Person2 = new Person("Lera", 17);

Person1.getInfo();
Person2.getInfo();

const BMW = new Car ('BMW', "5th Ed-n", "5yrs", "Germany");
const Benz = new Car ('Mercedes', "CLS", "1 yr", "Germany")

BMW.addOwner(Person1);
BMW.getInfo();

Benz.addOwner(Person2);
Benz.getInfo();



