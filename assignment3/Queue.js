
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
        if(this.isEmpty()) {
            return null
        }
        return(this.queue.start.data);
    }

    isEmpty() {
        return(this.queue.start == null);
    }
}