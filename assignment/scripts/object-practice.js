console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!  -Done
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  firstName:'Sam',
  lastName: 'Phipps',
  hasSiblings:true,
  shoeCount:2,
  favThreeFoods:[
    'Burger', 'Venison', 'Pie']
  // TODO - add properties here
};
console.log('A little about me:', me);

/* 2. Accessing object properties. -done
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/
let fullName=me.firstName + ' ' + me.lastName;

console.log('My full name is', fullName);


/* 3. Nested arrays -done
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/

console.log('My first favorite food is', me.favThreeFoods[0]);
console.log('My last favorite food is', me.favThreeFoods[me.favThreeFoods.length -1]);

/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/

console.log('My current shoe cound is:', me.shoeCount);
me.shoeCount=me.shoeCount+1;
console.log('I got new shoes and now have', me.shoeCount, 'shoes');

/* 5. Add a new property to an existing object. -done
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/
me.favoriteColer='green';
console.log('this is my object, should now contain favoriteColor:', me);
