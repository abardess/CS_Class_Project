// Instructions:
// You will simulate a full ride cycle using the code below. 
// Note: This should not be the only code you use to make sure your data structures function properly. 
// But the following code needs to run in a successful implementation. 

import { ThemeParkRide } from './ThemeParkRide.js';

function run() {
  const park = new ThemeParkRide(3);

  park.arrive("Alice");
  park.arrive("Bob");
  park.arrive("Charlie");
  park.arrive("Diana");

  console.log("Current line:", park.getLine()); // Should be Alice, Bob, Charlie, Dianna

  park.boardRide();  // Alice, Bob, Charlie get on, Charlie's in front
  park.unloadRide(); // Charlie, Bob, Alice get off

 console.log("Remaining in line:", park.getLine()); // Should be just Diana

  park.arrive("Eli");

  console.log("Remaining in line:", park.getLine()); // Should Diana and Eli

  park.boardRide();  // Diana, Eli get on
  park.unloadRide(); // Eli, Diana get off

  console.log("Remaining in line:", park.getLine()); // Should be empty

  park.boardRide(); // Does nothing
  park.unloadRide(); // Does nothing
}

run();