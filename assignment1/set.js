export class Set {
    set = [];
    constructor(set) {
        this.set = this.set;

        for(let i = 0; i < this.set.length; i++) {
            for(let j = 0; j < this.set.length; j++) {
                if((this.set[i] == this.set[j]) && (i != j)) {
                    this.set.splice(j,1);
                }
            }
        }

    }

    has(value) {
        for(let i = 0; i < this.set.length ; i++) {
            if(value == this.set[i]) {
                return true;
            }
        }
        return false;
    }

    add(value) {
        if(!this.has(value)) {
            this.set.push(value);
            console.log
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
        for(let i = 0; i < this.set.length - 1; i++) {
            for(let j = 0; j < this.set.length - 1; j++) {
                if((this.set[i] == this.set[j]) && (i != j)) {
                    this.set.splice(j,1);
                }
            }
        }
    }
}