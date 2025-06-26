export class Set {
    set = [];
    constructor(set) {
        this.set = this.set;
    }
    add(value) {
        if(this.has(value)) {
            return;
        }
        this.set.push(value);
    }

    has(value) {
        for(let i = 0; i < this.set.length - 1; i++) {
            if(value == this.set[i]) {
                return true;
            }
        }
        return false;
    }

    delete(value) {
        for(let i = 0; i < this.set.length - 1; i++) {
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
        for(let i = 0; i < this.set.length - 1; i++) {
            for(let j = 0; j < this.set.length - 1; j++) {
                if((this.set[i] == this.set[j]) && (i != j)) {
                    this.set.splice(j,1);
                }
            }
        }
    }
}