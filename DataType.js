
/*
Data Type :-->
1.Primitives data types
   a. Number
   b. String
   c. Boolean
   d. Null
   e. Undefined
   f. Symbol(ES6)
   g. BigInt(ES11)
2. Non-Primitives data types
   a. Object
   b. Array
   c. A date
*/

//?  Number :  Representing numeric value including integer and floating point numbers
//   Example :-->
 var myFavNum = 7;
 console.log(myFavNum); // Output : 7

 //? String :  Representing sequence of characters enclosed within single or double quotes
//   Example :-->
 var myName = "Singh's";
   console.log( myName); // Output : Singhg's

//? Boolean :  Representing logical entity having two values either true or false
//   Example :-->
 var isJavaScriptFun = true;
 console.log(isJavaScriptFun); // Output : true


//? Null :  Representing intentional absence of  value or an uninitialized variable
//   Example :-->
 var emptyValue = null;
 console.log(emptyValue); // Output : null

//? Undefined :  Representing the absence of value. It is often used to explicitly indicate that a variable or object property has no assigned value
//   Example :-->
 var notAssigned;
 console.log(notAssigned); // Output : undefined


//? Symbol(ES6) :  Representing a unique identifier. Symbols are often used as keys for object properties to ensure uniqueness and avoid naming collisions
//   Example :-->
   var uniqueId = Symbol('id');
   console.log(uniqueId); // Output : Symbol(id)

//? BigInt(ES11) :  Representing integers with arbitrary precision. BigInt is used when dealing with very large integers that exceed the safe limit of the Number type
//  Example :-->
   var bigIntValue = 1234567890123456789012345678901234567890n;
   console.log(bigIntValue); // Output : 1234567890123456789012345678901234567890n