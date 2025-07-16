import { Stack } from './Stack.js';

function assertEqual(actual, expected, message) {
  if (actual !== expected) {
    console.error(`❌ ${message} — Expected: ${expected}, Got: ${actual}`);
  } else {
    console.log(`✅ ${message}`);
  }
}

console.log("=== Stack Tests ===");

// Initialize a stack with value 10
const s = new Stack(10);
assertEqual(s.peek(), 10, "Initial value is on top");

// Push more values
s.push(20);
s.push(30);
assertEqual(s.peek(), 30, "Top after pushing 30");

// Pop a value
s.pop();
assertEqual(s.peek(), 20, "Top after popping 30");

// Pop again
s.pop();
assertEqual(s.peek(), 10, "Top after popping 20");

// Pop last value
s.pop();
assertEqual(s.peek(), null, "Top is null after popping everything");
assertEqual(s.isEmpty(), true, "Stack is empty now");