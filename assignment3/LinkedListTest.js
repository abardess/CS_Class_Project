import { LinkedList } from './LinkedList.js';
import { Node } from './Node.js';

let list = new LinkedList(new Node(3));
list.insertTail(new Node(9));
list.insertTail(new Node(17));
list.insertTail(new Node(4)); 
list.insertTail(new Node(5)); 

list.insertHead(new Node(1)); 

let currentNode = list.start; 
while (currentNode != null) {
  console.log(currentNode.data);
  currentNode = currentNode.next; 
}

//------------------------------

list.deleteHead();
console.log("\n\n");
console.log("after deleteHead():");
currentNode = list.start; 
while (currentNode != null) {
  console.log(currentNode.data);
  currentNode = currentNode.next; 
}

//------------------------------

list.deleteTail();
console.log("\n\n");
console.log("after deleteTail():");
currentNode = list.start; 
while (currentNode != null) {
  console.log(currentNode.data);
  currentNode = currentNode.next; 
}
