/*
                      Destructuring Array

Destructuring is like unpacking the values in the array (or) Object into a separate varibles.


*/

// const arr = [2,3,4]
// const [x,y,z] = [2,3,4]
// console.log(x,y,z)

// // If we want only first and theird 

// const [x, ,z] = arr;

// // For swaping  :- [main , secondary] = [secondary , main]

// console.log(x,z)



/*

                      Destructuring Objects

*/                      
       


// const restaurent = {

//     name : "Meghana",
//     openingHours : 2,
//     categories : ["Biryani","Cool Drinks"]

// }                      
// const { name , openingHours , categories } = restaurent;

// console.log(name,openingHours,categories)



// // To merge more then two objects :  object.assign(target, source1,source2) 


// let obj1 = { a: 10 };
// let obj2 = { b: 20 };
// let obj3 = { c: 30 };
 
// let new_obj = Object.assign( {} , obj1, obj2, obj3);
 
// console.log(new_obj, obj1);


/*


       ----------------- Spread (...) -------------------------

It expands an array into individual elements. 
It will allow us to copy all (or) part of an exsiting  array (or) object into another array (or) object.

Note : 
 We can only expand iterables. ( arrays,strings,maps,sets)

 We only use Spread operator, when we want to pass an arguments to a function (or) building an array.


*/


// const arr = [4,5,6]
// const newArr = [1,2,3,...arr]

// console.log(newArr)



/*


------------------------- Rest pattern ---------------------------------
    It is opposite to spread operator.

    Rest will pack things into an array.



*/

// const [a,b, ...others] = [1,2,3,4,5]
// console.log(a,b,others)



/*
  ---------------- Nullish operator(??) ------------------------

  Nullish values are simply Null (or) Undefined.
  It awalys returns  a value otherthen the null (or) undefined.


*/

// const val = 0 ?? 10
// const val = null ?? 10
// const val = 0 ?? undefined;


// console.log(val)


/* 
     -------------------------- Logical Operator ------------------------------

     or : || : If both are false then only false.
               If anyone of them true then it is True.

        T     T  : T
        T     F  : F
        F     T  : F
        F     F  : F
    
    and : && : If both are TRue then only True.
               If anyone of them false then it is false .


*/

// console.log(0 || 10)
// console.log('Thimothy' || 10)

// console.log(0 && 10)
// console.log("" && 10)
// console.log(false && 10)
// console.log("Thimthy" && 10)


/*

  ----------------------- Optional chaining(?.) ------------------------------

  By using the ?. operator instead of just ., JavaScript knows to implicitly check to be sure obj.first is not null or undefined before attempting to access obj.first.second. 
  If obj.first is null or undefined, the expression automatically short-circuits, returning undefined.


*/





// const adventurer = {
//   name: 'Alice',
//   cat: {
//     name: 'Dinah',
//   },
// };

// const dogName = adventurer.dog?.name;
// console.log(dogName);
// // Expected output: undefined

// console.log(adventurer.someNonExistentMethod?.());  // Output : undefined