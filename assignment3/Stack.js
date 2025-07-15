import{ Node } from './Node.js';
import{ LinkedList } from './LinkedList.js';

export class Stack {

    constructor(linkedList) {
        this.stack = linkedList;
    }

    push(node) {
        this.stack.insertTail(node);
    }

    pop() {
        if(this.isEmpty()) {
            return
        }

        let end = this.stack.end;
        let currentNode = this.stack.start;
        while (currentNode.next != null) {
            if(currentNode.next.next == null) {
                currentNode.next = null;
                this.stack.end = currentNode;
                return(end);
            }
            currentNode = currentNode.next;
        }
    }

    peek() {
        if(this.isEmpty()) {
            return
        }
        return(this.stack.end)
    }

    isEmpty() {
        return(linkedList.end == null);
    }
}


