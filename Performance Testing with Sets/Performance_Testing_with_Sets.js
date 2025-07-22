class ArrayBasedSet {
  data = []; 
  
  add(value) {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] == value) {
        return; 
      }
    }
    
    this.data.push(value); 
  }

  values() {
    return this.data; 
  }
}

//---------------------------------------

class ObjectBasedSet {
  data = {}; 
  
  add(value) {
    if (typeof this.data[value]  == "undefined") {
      this.data[value] = true; 
    }
  }
  
  values() {
    // Keys get stored as string in Javascript, 
    // even if keys were set as integers.
    return Object.keys(this.data).map((stringValue) => {
      return parseInt(stringValue); 
    }); 
  }
}

//---------------------------------------

function testArraySet(randomRange, numValues) {
  
  // Setup
  let arrSet = new ArrayBasedSet();
  
  const startTime = performance.now();
  
  // Exercising code under test
  for (let i = 0; i < numValues; i++) {
    let value = Math.floor(Math.random() * randomRange) + 1; 
    arrSet.add(value);
  }
  
  const endTime = performance.now();
  return endTime - startTime; // Time in milliseconds
}

//---------------------------------------

function testObjectSet(randomRange, numValues) {
  
  // Setup
  let objSet = new ObjectBasedSet();
  
  //start timer
  const startTime = performance.now();
  
  // Exercising code under test
  for (let i = 0; i < numValues; i++) {
    let value = Math.floor(Math.random() * randomRange) + 1; 
    objSet.add(value);
  }
  
  const endTime = performance.now();
  return endTime - startTime; // Time in milliseconds
}

// Run tests...
//---------------------------------------

console.log(""); 

// set the rand number range and number of values to add
let randValueRange = 1000000;
let numValues = 1000000;

// ouput test data
console.log("Runtime in milliseconds for the following: ");
console.log("Random values between 0 and " + randValueRange)

console.log("\nCopy and paste the rows of comma-separated lists\n into Desmos to generate a table and scatterplot.");
console.log("----------------------------------------")
console.log("# of values , Array-based , Object-based");
console.log("----------------------------------------\n")

for(let i = 10 ; i <= numValues ; i*=10) {
  console.log(i + " , " +  testArraySet(randValueRange, i) + " , " +  testObjectSet(randValueRange, i));
}
console.log("")



