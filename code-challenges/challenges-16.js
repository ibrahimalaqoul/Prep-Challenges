'use strict';


// Combine methods

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Write a function that takes in a string and returns the reverse of this string .
//
// Input <= "Hello";
// Output => "olleH";

const reverseString = (string) => {
   let myArray= string.split("");
   const reversedArray = [];
   for (let i = 0; i < myArray.length; i++) {
    reversedArray.unshift(myArray[i]);
}
   return reversedArray.join("");
}
// -------------------------------------------------------------------------------------------------------



// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes an array of strings and returns only strings that contain ^_^.
//
// Ex :-
// Input <= ["hello ^_^ ","Hi ^_^" ,"What's up ^_-" ,"lol"] , Output => ["hello ^_^ ","Hi ^_^" ] ;

const detectFace = (arr) => {
    let myArray =[];
     arr.forEach(element => {
         if (element.includes("^_^")) {
             myArray.push(element)
         }
     });
     return myArray;
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes in a string and returns a string contains only characters in even positions.
//
// Ex :-
// Input <= "coding" output =>"cdn"

const eveCharacter = (str) => {
     let myNewArray = [];
    let myArray=str.split("")
    myArray.forEach(element => {
        if (myArray.indexOf(element) % 2 == 0) {
            myNewArray.push(element); 
        }
    });    
    return myNewArray.join("");
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 04
// Optional:

// Let us consider you are hired as a software developer in a tech company and you are assigned to work on a restaurant web application project .

// And you are assigned to write function to return only ingredients that contains chicken.
//
// Input:
// [["mushroom", "grilled chicken", "sauce"], ["Bread", "Potato", "baked chicken"], ["fried potato", "garlic sauce", "fried chicken"]];
//
// Output:
// [["grilled chicken"], ["baked chicken"], ["fried chicken"]];


const chickenGradients = (arr) => {
    let outterArray=[];
    for (let i = 0; i < arr.length; i++) {
        let innerArray =[];
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j].includes("chicken")){
                innerArray.push(arr[i][j]);
            }
        }
        outterArray.push(innerArray);
    }
    return outterArray;
}
// -------------------------------------------------------------------------------------------------------

module.exports = { reverseString, detectFace, eveCharacter, chickenGradients };
