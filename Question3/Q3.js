"use strict";
/**
 * Using typescript
 * Create a class.
 * Add a property.
 * Add a private constructor that gives the property a value.
 * Access the property from outside the class.
 */
class MyClass {
    // private constructor
    constructor(propertyValue) {
        this.myProperty = propertyValue;
    }
    // public method for creating an instance of the class
    static createInstance(propertyValue) {
        return new MyClass(propertyValue);
    }
}
// trying to create an instance of the class directly will throw an error
// Constructor of class 'MyClass<T>' is private and only accessible within the class declaration.
// const myClassInstance = new MyClass<string>("Hello World!");
// create an instance of the class with a string value
const stringInstance = MyClass.createInstance("Hello World!");
// access the property
console.log(stringInstance.myProperty); // Output: "Hello World!"
// create an instance of the class with a number value
const numberInstance = MyClass.createInstance(42);
// access the property
console.log(numberInstance.myProperty); // Output: 42
