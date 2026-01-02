// 1. Create a Simple Class: - Write a code to create a class `Person` with a constructor that initializes `name` and `age` properties. 
// 2. Add Method to Class: - Write a method inside the `Person` class to return a greeting message like "Hello, my name is [name]". 
// 3. Instantiate a Class: - Write a code to create an instance of the `Person` class with `name` "John" and `age` 30, and call the greeting method. 


class Person {
  constructor(name,age){
    this.name=name
    this.age=age
  }
  myName(){
    console.log("Hello, my name is ",this.name)
  }
}
const p=new Person("Jhone", 30)
p.myName()

// 4. Class Property Initialization: - Write a class `Car` with `make` and `model` properties initialized in the constructor. 
class Car{
  constructor(make,model){
    this.make=make
    this.model=model

  }
}
const c=new Car("Tesla",2025)
console.log(c)