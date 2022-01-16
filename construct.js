

// Constructor function for Person objects
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.toString = () => {
    //   return `
    //   Bhag bhosrike
    //   firstName: ${this.firstName}
    //   Nation: ${this.Nation}
    //   `
    return          
  }
}
Person.prototype.name = function(){
 return `${this.firstName} ${this.lastName}`;}
Person.prototype.Nation = "india";
// Person.prototype.toString = function() {
//     return 'hello'
// }
// Create 2 Person objects
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

// Display nationality
console.log(myFather);