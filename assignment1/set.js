class Set {
    constructor(set) {
        this.set = [];
    }
    add(value) {
        if(this.has(value)) {
            console.log("Value already exists in set.");
            return;
        }
        this.set.append(value);
    }

    has(value) {
        for(let i = 0; i < this.set.length - 1; i++) {
            if(value == set[i]) {
                return true;
            }
        }
        return false;
    }

    delete(value) {
        for(let i = 0; i < this.set.length - 1; i++) {
            if(value == set[i]) {
                this.set.splice(i,1);
                return;
            }
        }
        console.log("No such value.");

    }
    clear() {
        this.set = [];
    }
    values() {
        return this.set;
    }
    size() {
        return this.set.length()
    }
}

