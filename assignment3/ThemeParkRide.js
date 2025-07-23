import { Node } from "./Node.js";
import { Queue } from "./Queue.js";
import { Stack } from "./Stack.js";

export class ThemeParkRide {
  constructor(rideCapacity) {
    this.line = new Queue();            // waiting visitors
    this.ride = new Stack();            // people on the ride
    this.capacity = rideCapacity;       // max people per ride
  }

  // Add visitor to the line
  arrive(visitorName) {
    let x = new Node(visitorName);
    this.line.enqueue(x);
  }
// Move up to this.capacity people from line to ride (stack)
  boardRide() {
    for(let i = 0; i < rideCapacity; i++) {
      this.ride.push(this.line.dequeue);
    }
  
  }
    // Pop all people from the ride stack, in reverse order.
    // The people who got on last sit in the front of the ride, and so they'll get off first. 

  unloadRide() {
    while(!this.ride.isEmpty()) {
      this.ride.pop()
    }
  }

  // Return array or string of people still waiting.
  getLine() {
    let waitingList = [];
    let guest = this.line.start;
    while(!guest == null) {
      waitingList.push(guest);
      guest = guest.next;
    }
    return(waitingList)
  }
}