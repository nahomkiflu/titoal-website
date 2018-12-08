// Always have a plan
// makeing a plan gives you structure, helps to give you a path to take. even if it quickly becomes
//  clear it is not the right path, its a way to get yourself jumpstart


// restate the problem
// this is a great way to make the problem clear, and concise. also a great way to figure out what
// is being asked and what is needed. rubberducking


// divide the problem 
// break the problem up into smaller section, this can help with the mental block that may come 
// form how large a problem may seem. you may not know how to get from A to C but you can walk 
// from A to B then from B to C

// start with what you know 
// once the problem is in smaller pieces you might be able to solve one of the smaller problems
// start with what you know might be helpful in getting momentum to solve a problem

// reduce the problem
// if you are finding the constraints of the question too difficult to navigate try taking one way
// if you cant get a reverce string back, can you get an array of string back first

// look for analogies
// if you cant find a way to a solution try creating an anology solution what would give you a 
// similar result that your already done before

// experiment 
// sometimes theres only so much prep we can do with problem and were going to have to divein
// just trying a solution and fiding out its wrong
// give you good clues as to what works and what doesnt

//challenge 
//      make a function that takes in two array
//      and add the first array to the second 

// needs
// function with two parameter
// two arrays

// tools
// how can we add two arrays together
// .push()
// for loop


let arr1 =[`tortie`, `calico`, `mainecoon`];
let arr2 =[`poodle`, `beagle`, `golden`, `terrier`];

function allAnimals (one, two){
    for( i =0; i< arr1.length; i++){
        two.push(one[i])
    }
    return  two
}

let newArray = allAnimals (arr1, arr2);
console.log(newArray);