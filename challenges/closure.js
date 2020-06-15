// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
//This is due to scoping. the variable const internal is avaialbe to fucntion nestedFucntion() bc it is within that scope. It was declared inside myFunction().
// It is all within myFuntion().

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. 
For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(num){
  let add= 0
  for (let i=1; i<=num; i++){
   add= i+ add
  }
  return add
}
console.log(summation(4));


  