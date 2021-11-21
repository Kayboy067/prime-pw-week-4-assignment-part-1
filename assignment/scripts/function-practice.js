console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return `Hello ${name}`;
}
// Remember to call the function to test
console.log('Test - should say "Hello World!"', hello('Kay'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  console.log('addNumbers:', firstNumber, secondNumber);
  let answer = firstNumber + secondNumber;
  return answer;
  // return firstNumber + secondNumber;
}
console.log('Running addNumbers with 10 & 20:', addNumbers(10, 20));
console.log('Running addNumbers with 45 & 15:', addNumbers(45, 15));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num0, num1, num2){
  console.log('multiplyThree:', num0, num1, num2);
  let answer = num0 * num1 * num2;
  return answer;
}
console.log('Running multiplyThree with 2, 10 & 20:', multiplyThree(2, 10, 20));
console.log('Running multiplyThree with 3, 45 & 15:', multiplyThree(3, 45, 15));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
console.log('isPositive:', number)
  if ( number > 0 ){
    return true;
  }
  else {
    return false;
  }
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast( array ) {
  if (array.lenght === 0) {
    return undefined;
  } else {
    return array[array.lenght - 1];
  }
}
let favFoods = ['rice', 'beans', 'egg']
console.log('favFoods are', getLast(favFoods));
// After testing out differnet scenerios, why does it keep runnig 'undefined'?

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find( value, array ){
  for (let i = 0; i < array.length; i++){
    if (value === array[i]){
      return true;
    }
  }
      return false;
}
console.log('favFood is', find ('egg', ['rice', 'beans', 'egg']));
console.log('favFood is not', find ('pizza', ['rice', 'beans', 'egg']));


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (letter === string[0]) {
    return true;
  }else {
    return false;
  }

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
