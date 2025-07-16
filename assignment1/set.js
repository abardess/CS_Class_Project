export class Set {
    set = [];
    constructor(set) {
        // It looks like you're copying a set that's passed in to use
        // as the initial data for the set. You're doing a good
        // thing by copying it so you don't end up mangling the
        // outside array. That said, you've got an O(n^2) algorithm
        // which can be made so much faster. 
        // We *could* just create a for loop and copy each item
        // from set into this.set. That's O(n) -- better than O(n^2)
        // You can also create a shallow copy more easily (less code)
        // on O(n) time using the array.slice() method. 
        // Details here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
        this.set = set ? set.slice() : []; 

        // PS: The question mark / colon syntax above is called the
        // ternary operator. Basically an if/else in one line. 
        // The above says: If a set was passed in, use it, making
        // a shallow copy with set.slice(). Otherwise, create a new array.
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
    }
 
    has(value) {
        for(let i = 0; i < this.set.length; i++) {
            if(value == this.set[i]) {
                return true;
            }
        }
        return false;
    }
 
    add(value) {
        if(!this.has(value)) {
            this.set.push(value);
        }
    }

    delete(value) {
        for(let i = 0; i < this.set.length; i++) {
            if(value == this.set[i]) {
                this.set.splice(i,1);
                return true;
            }
        }
        return false;

    }
    clear() {
        this.set = [];
    }
    values() {
        return this.set;
    }
    size() {
        return this.set.length;
    }

    clean() {
        // We can turn this from O(n^2) to O(1)
        // Significant speedup!
        this.set = []; 
    }
}
