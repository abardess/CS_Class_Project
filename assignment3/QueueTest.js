import { Queue } from './Queue.js';

// Test the Queue
const q = new Queue("first");
console.log(q.peek()); // "first"
q.enqueue("second");
console.log(q.dequeue()); // "first"
console.log(q.peek()); // "second"
console.log(q.isEmpty()); // false
q.dequeue();
console.log(q.isEmpty()); // true

/*

first
first
second
false
true

*/