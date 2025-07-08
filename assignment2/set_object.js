export class Set {
    set = {};

    constructor(initialValues = []) {
        for (let value of initialValues) {
            this.set[value] = true;
        }
    }

    has(value) {
        return this.set.hasOwnProperty(value);
    }

    add(value) {
        this.set[value] = true;
    }

    delete(value) {
        if (this.has(value)) {
            delete this.set[value];
            return true;
        }
        return false;
    }

    clear() {
        this.set = {};
    }

    values() {
        return Object.keys(this.set);
    }

    size() {
        return Object.keys(this.set).length;
    }

    // clean() is no longer needed because duplicates are inherently avoided
    clean() {
        // Not needed for object-based set, but included for compatibility
    }

    print() {
        console.log(this.set);
    }
}