export class Stack {

    constructor(linkedList) {
        this.stack = linkedList;
    }

    push(node) {
        this.stack.insertTail(node);
    }

    pop() {
        if(this.isEmpty()) {
            return null
        }

        let end = this.stack.end;
        let currentNode = this.stack.start;
        if(currentNode.next == null) {
            end = currentNode;
            this.stack.start = null;
            this.stack.end = null;
            return(end);
        }
        
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
            return null
        }
        return(this.stack.end.data)
    }

    isEmpty() {
        return(this.stack.end == null);
    }
}


