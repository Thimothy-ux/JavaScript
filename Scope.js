// // Scope : Is about Accessability of a value.

/*
Global Scope :
    Outside of any function or block.
    It is accessable to entire file.

Function Scope : 
    Variables are accessable only inside function(within the block).
    It is also called as Local scope.

Block Scope : 
    Variables are accessible only inside the block.
    This only applicable to const and let.
    Function are also Block Scoped.
*/

// // Scope chain : Order in which functions are written in the code 
// // Callstack : Order in which functions were called.

/*
                    *  Hoisting * (READ W3SCHOOLS for clear understanding.)

Hoisting is JavaScript's default behavior of moving declarations to the top.


works  : var (works but shows undefined) , function() declaration
wont   : let , const , anonymous function, function expression



*/


/*

name = "Thimothy"
console.log(name)
 var name = "Thimothy"  // Output : undefined

Pname("Thimothy")
function Pname(val){
    console.log(val)    // Output : Thimothy
}

*/






/*

// Variables defined with let and const are hoisted to the top of the block, but not initialized.
// Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.
// Using a let variable before it is declared will result in a ReferenceError.
// The variable is in a "temporal dead zone" from the start of the block until it is declared:



name = "Thimothy"
console.log(name)
let name; 

*/
