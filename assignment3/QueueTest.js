
import { Queue } from './Queue.js';
import { LinkedList } from './LinkedList.js';
import { Node } from './Node.js';

function assertEqual(actual, expected, message) {
  if (actual !== expected) {
    console.error(`❌ ${message} — Expected: ${expected}, Got: ${actual}`);
  } else {
    console.log(`✅ ${message}`);
  }
}


console.log("=== Queue Tests ===");

//initialize a linked list with one node that has a value of 10
let list = new LinkedList(new Node(10)); 

// Initialize a stack from the linkedlist
const q = new Queue(list);
assertEqual(q.peek(), 10, "Initial value " + q.peek() + " is on top");

// Push more values
q.enqueue(new Node(20));
q.enqueue(new Node(30));
assertEqual(q.peek(), 10, "After enqueuing 30, " + q.peek() + " is on top");

// Pop a value
q.dequeue();
assertEqual(q.peek(), 20, "Sfter dequeuing 10 " + q.peek() + " is on top");

// Pop again
q.dequeue();
assertEqual(q.peek(), 30, "After dequeuing 20 " + q.peek() + " is on top");

// Pop last value
q.dequeue();
assertEqual(q.peek(), null, "After dequeuing 30 " + q.peek() + " is on top");
assertEqual(q.isEmpty(), true, "Stack is empty now");