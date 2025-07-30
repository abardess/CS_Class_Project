import { Node } from "./Node.js";
import { LinkedList } from "./LinkedList.js";
import { Queue } from "./Queue.js";
import { Stack } from "./Stack.js";

export class ThemeParkRide {
  constructor(rideCapacity) {
    this.line = new Queue(new LinkedList());        // waiting visitors
    this.ride = new Stack(new LinkedList());       // people on the ride
    this.capacity = rideCapacity;       // max people per ride
  }

  // Add visitor to the line
  arrive(visitorName) {
    this.line.enqueue(new Node(visitorName));
    console.log(this.line.end.data + " has arrived!")
  }
// Move up to this.capacity people from line to ride (stack)
  boardRide() {
    for(let i = 0; i < this.capacity; i++) {
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
    console.log(guest);
    while(guest != this.line.end) {
      console.log(guest.data + "is in line");
      waitingList.push(guest);
      guest = guest.next;
    }
    return(waitingList)
  }
}