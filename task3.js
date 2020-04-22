// declear a variable to an empty array
let myArray = [];

// Checking if the argument is equal to the conditions

function myFunction(num) {
  // for loop appending num to x
  for (x = 1; x <= num; x++) {
    // the switch statement is checking if the loops is equal to the cases iterate else return the value of x".
    switch (true) {
      case (x % 2 == 0 && x % 3 == 0 && x % 5 == 0):
        myArray.push("yu-gi-oh");
        break;
      case (x % 2 == 0 && x % 3 == 0):
        myArray.push("yu-gi");
        break;
      case (x % 2 == 0 && x % 5 == 0):
        myArray.push("yu-oh");
        break;
      case (x % 3 == 0 && x % 5 == 0):
        myArray.push("gi-oh");
        break;
      case (x % 2 == 0):
        myArray.push('yu');
        break;
      case (x % 3 == 0):
        myArray.push('gi');
        break;
      case (x % 5 == 0):
        myArray.push('oh');
        break;
      default:
        myArray.push(x);
        break;
    }
  }
  return myArray;
}
// calling myFunction.
console.log(myFunction(100))
console.log(myFunction(25));
