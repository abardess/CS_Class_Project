// make sure to include push, pop, peek, isEmpty
// Implement the Stack and the Queue data structures using a LinkedList
// as their backing data structure.
// Remember: You can't use any arrays to store data! 
// Note: You will need to edit the LinkedList implementation we worked 
// on in class in order to support both stacks and queues. 
// If you get stuck here, remember how stacks and queues function, 
// and what LIFO and FIFO means for the data that they store.

import { LinkedList } from './LinkedList.js';
import { Node } from './Node.js';

export class Stack {

    constructor(value) {
        this.stack = new LinkedList(new Node(value));
    }

    push(value){
        this.stack.insertHead(new Node(value));
    }

    pop(){
        this.stack.deleteHead();
    }

    peek(){
        return this.stack.getHead();
    }

    isEmpty(){
        return (this.stack.length() == 0);
    }

    getvalues(){
        this.stack.getValues();
    }

}