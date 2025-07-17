// Instrucitons: Write and extend the following class (excuse the lack of code highlighting in Canvas!):

import { Queue } from './Queue.js';
import { Stack } from './Stack.js';

export class ThemeParkRide {
  constructor(rideCapacity) {
    this.line = new Queue();            // waiting visitors
    this.ride = new Stack();            // people on the ride
    this.capacity = rideCapacity;       // max people per ride
  }

  // Add visitor to the line
  arrive(visitorName) {
    this.line.enqueue(visitorName);
  }

  // Move up to this.capacity people from line to ride (stack)
  boardRide() {
    for(let i = 0 ; i < this.capacity; i++){
      if(!this.line.isEmpty()) {
        this.ride.push(this.line.dequeue());
      } else {
        break;
      }
    }
  }

  // Move up to this.capacity people from line to ride (stack)
  unloadRide() {
    while(!this.ride.isEmpty()){
      this.ride.pop();
    }
  }

  // Return array or string of people still waiting.
  // How can you turn your list into an array? 
  getLine() {
    return this.line.getValues();
  }
}