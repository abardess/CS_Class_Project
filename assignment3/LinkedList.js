import { Node } from './Node.js';

export class LinkedList {
  start = null; // nodes
  end = null;   // nodes
  
  constructor(node) {
    this.start = node; 
    this.end = node;
  }
  
  insertHead(node) {
    node.next = this.start; // New node points to the current head
    this.start = node;      // Update the head to be the new node
  }
  
  insertTail(node) {
    this.end.next = node; 
    this.end = node; 
  }


  // as written, does not remove the old head node from computer memory
  deleteHead() {

    // if list is empty
    if (!this.start) {
      return; 
    }
    
    this.start = this.start.next;
    
    // If next element in the list is null,
    // update 'end' to null as well
    if (!this.start) {
      this.end = null;
    }
  }


  // as written, does not remove the old tail node from computer memory 
  deleteTail() {

    if (!this.start) return; // List is empty

    if (this.start === this.end) {
      // Only one node in the list
      this.start = null;
      this.end = null;
      return;
    }

    // More than one node: find the second-to-last node
    let current = this.start;
    while (current.next !== this.end) {
      current = current.next;
    }

    current.next = null;
    this.end = current;
  }

  getHead() {
    
    if (this.start) {
      return this.start.data;
    } else {
      return null;
    }
    
    // return this.start ? this.start.data : null;
  }

  getTail() {
    if (this.end) {
      return this.end.data;
    } else {
      return null;
    }
  }

  length() {
    let currentNode = this.start;
    let counter = 0; 
    while (currentNode != null) {
      counter++;
      currentNode = currentNode.next; 
    }
    return counter;
  }
}