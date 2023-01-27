/**
 * Using typescript
 * Create a class.
 * Add a property.
 * Add a private constructor that gives the property a value.
 * Access the property from outside the class.
 */

class MyClass<T> {
  // property
  myProperty: T;

  // private constructor
  private constructor(propertyValue: T) {
    this.myProperty = propertyValue;
  }

  // public method for creating an instance of the class
  public static createInstance<T>(propertyValue: T): MyClass<T> {
    return new MyClass<T>(propertyValue);
  }
}

// trying to create an instance of the class directly will throw an error
// Constructor of class 'MyClass<T>' is private and only accessible within the class declaration.
// const myClassInstance = new MyClass<string>("Hello World!");

// create an instance of the class with a string value
const stringInstance = MyClass.createInstance<string>("Hello World!");

// access the property
console.log(stringInstance.myProperty); // Output: "Hello World!"

// create an instance of the class with a number value
const numberInstance = MyClass.createInstance<number>(42);

// access the property
console.log(numberInstance.myProperty); // Output: 42
