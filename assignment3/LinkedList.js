export class LinkedList {
  start = null; // nodes
  end = null;   // nodes
  
  constructor(node) {
    this.start = node; 
    this.end = node;
  }
  
  insertHead(node) {
    node.next = this.start;
    this.start = node; 
  }
  
  insertTail(node) {
    this.end.next = node; 
    this.end = node; 
  }
}