// make sure ot include enqueue, dequeue, peek, isEmpty
// Implement the Stack and the Queue data structures using a LinkedList
// as their backing data structure.
// Remember: You can't use any arrays to store data! 
// Note: You will need to edit the LinkedList implementation we worked 
// on in class in order to support both stacks and queues. 
// If you get stuck here, remember how stacks and queues function, 
// and what LIFO and FIFO means for the data that they store.

import { LinkedList } from './LinkedList.js';
import { Node } from './Node.js';

export class Queue {
    
    constructor(value) {
        this.queue = new LinkedList(new Node(value));
    }

    enqueue(value){
        this.queue.insertTail(new Node(value));
    }

    dequeue(){
        let headValue = this.queue.getHead();
        this.queue.deleteHead();
        return headValue;
    }

    peek(){
        return this.queue.getHead();
    }

    isEmpty(){
        return (this.queue.length() == 0);
    }
}