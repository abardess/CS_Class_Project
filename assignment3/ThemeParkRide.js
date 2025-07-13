// Instrucitons: Write and extend the following class (excuse the lack of code highlighting in Canvas!):

export class ThemeParkRide {
  constructor(rideCapacity) {
    this.line = new Queue();            // waiting visitors
    this.ride = new Stack();            // people on the ride
    this.capacity = rideCapacity;       // max people per ride
  }

  arrive(visitorName) {
    // Add visitor to the line
  }

  boardRide() {
    // Move up to this.capacity people from line to ride (stack)
  }

  unloadRide() {
    // Pop all people from the ride stack, in reverse order.
    // The people who got on last sit in the front of the ride,
    // and so they'll get off first. 
  }

  getLine() {
    // Return array or string of people still waiting.
    // How can you turn your list into an array? 
  }
}