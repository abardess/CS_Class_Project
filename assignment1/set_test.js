import { Set } from './set.js'; // the class file must have " export class Set {...} "

const mySet = new Set([]);
let myValues = [1, 1, 2, 5, 6, 6, 7, 9, 9];



// test values() and size()
console.log("\nBEFORE additions...");
console.log("mySet.values() --> " + mySet.values());
console.log("mySet.size() --> " + mySet.size());

// test add()
for (let i = 0; i < myValues.length ; i++){
    mySet.add(myValues[i]);
}

console.log("\nAFTER additions...");
console.log("mySet.values() --> " + mySet.values());
console.log("mySet.size() --> " + mySet.size());
console.log("\n------------------------------- \n");

console.log("Testing has() method...");
console.log("mySet: " + mySet.values()  + "\n");
for (let i = 0; i < 11 ; i++){
    console.log("mySet.has(" + i + ") --> " + mySet.has(i));
}
console.log("\n------------------------------- \n");


// test clear()
console.log("Testing clear() method... \n");
console.log("BEFORE clear()...");
console.log("mySet.values() --> " + mySet.values());
console.log("mySet.size() --> " + mySet.size() + "\n");

mySet.clear();

console.log("AFTER clear()...");
console.log("mySet.values() --> " + mySet.values());
console.log("mySet.size() --> " + mySet.size());
console.log("\n------------------------------- \n");

// test delete()
for (let i = 0; i < myValues.length ; i++){
    mySet.add(myValues[i]);
}

console.log("Testing delete() method...");
console.log("mySet: " + mySet.values()  + "\n");

let hadValue = false;

for (let i = 0; i < 11 ; i++){
    hadValue = mySet.delete(i);
    console.log("mySet.delete(" + i + ") --> " + hadValue + " " + mySet.values());
}
console.log("\n------------------------------- \n");
