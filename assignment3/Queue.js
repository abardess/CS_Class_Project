import{ Node } from './Node.js';
import{ LinkedList } from './LinkedList.js';

export class Queue {

    constructor(linkedList) {
        this.queue = linkedList;
    }

    enqueue(node) {
        this.queue.insertTail(node);
    }

    dequeue() {
        let up = this.queue.start;
        this.queue.start = this.queue.start.next;
        return(up);
    }

    peek() {
        return(this.queue.start);
    }

    isEmpty() {
        return(linkedList.start == null);
    }
}