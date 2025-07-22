
import { LinkedList } from './LinkedList.js';
import { Node } from './Node.js';

let list = new LinkedList(new Node(3));
list.insertTail(new Node(9));
list.insertTail(new Node(17));
list.insertTail(new Node(4)); 
list.insertTail(new Node(5)); 
list.insertHead(new Node(1)); 

console.log(list.getValues());

//------------------------------

list.deleteHead();
console.log("\n\n");
console.log("after deleteHead():");
console.log(list.getValues());

//------------------------------

list.deleteTail();
console.log("\n\n");
console.log("after deleteTail():");
console.log(list.getValues());

//------------------------------

console.log("\n\n");
console.log("Initialize with no parameter passed:");

let list2 = new LinkedList();
list2.insertTail(new Node(6));
list2.insertTail(new Node(12));
list2.insertTail(new Node(15)); 
list2.insertTail(new Node(3)); 
list2.insertHead(new Node(7)); 
console.log(list2.getValues());

/*
import { LinkedList } from './LinkedList.js';
import { Node } from './Node.js';

function testLinkedList() {
  console.log("Starting LinkedList tests...");

  // Test 1: Initialization
  const node1 = new Node("first");
  const list = new LinkedList(node1);
  console.assert(list.getHead() === "first", "Test 1a Failed: Head should be 'first'");
  console.assert(list.getTail() === "first", "Test 1b Failed: Tail should be 'first'");
  console.assert(list.length() === 1, "Test 1c Failed: Length should be 1");

  // Test 2: insertTail
  const node2 = new Node("second");
  list.insertTail(node2);
  console.assert(list.getTail() === "second", "Test 2 Failed: Tail should be 'second'");
  console.assert(list.length() === 2, "Test 2 Failed: Length should be 2");

  // Test 3: insertHead
  const node0 = new Node("zero");
  list.insertHead(node0);
  console.assert(list.getHead() === "zero", "Test 3 Failed: Head should be 'zero'");
  console.assert(list.length() === 3, "Test 3 Failed: Length should be 3");

  // Test 4: deleteHead
  list.deleteHead(); // removes "zero"
  console.assert(list.getHead() === "first", "Test 4a Failed: Head should now be 'first'");
  console.assert(list.length() === 2, "Test 4b Failed: Length should be 2");

  // Test 5: deleteTail
  list.deleteTail(); // removes "second"
  console.assert(list.getTail() === "first", "Test 5a Failed: Tail should now be 'first'");
  console.assert(list.length() === 1, "Test 5b Failed: Length should be 1");

  // Test 6: deleteHead until empty
  list.deleteHead(); // removes "first"
  console.assert(list.getHead() === null, "Test 6a Failed: Head should be null");
  console.assert(list.getTail() === null, "Test 6b Failed: Tail should be null");
  console.assert(list.length() === 0, "Test 6c Failed: Length should be 0");

  // Test 7: deleteTail on empty list (should not crash)
  list.deleteTail(); // should be safe no-op
  console.assert(list.length() === 0, "Test 7 Failed: Length should still be 0");

  console.log("All LinkedList tests passed.");
}

testLinkedList();
*/