export class Set {
    
    set;

    constructor() {
        this.set = [];
    }

    //Return true or false if the Set contains the given value.
    has(value) {
        let set_length = this.set.length;

        // searched the  array for 'value' and return as soon as match found
        for(let i = 0; i < set_length ; i++) {
            if(this.set[i] == value){
                return true;
            }
        }

        return false; // searched the whole array, with no match
    }

    //Insert the value into the Set, if it does not already exist. 
    add(value) {
        if(!this.has(value)){
            this.set.push(value);
        }
    }

    //Delete the given value from the set. 
    //Return true if the value was deleted, or false if the value did not exist in the set.  
    delete(value) {

        let value_index = null;

        // find the index of the value
        for(let i = 0; i < this.set.length ; i++) {
            if(this.set[i] == value){
                value_index = i;
                break;
            }
        }

        // will return false if value_index never got set to a value,
        //meaning there was not in the array 
        if (value_index == null) {
            return false;
        }

        // only runs if the set had 'value' in it...
        for(let i = value_index; i < this.set.length ; i++) {
            this.set[i] = this.set[i + 1];
        }
        this.set.pop(); // remve the last redundant element
        return true; // ends up returning true if not null
    }


    //Remove all values from the set. 
    clear() {
        this.set = [];
    }


    //Return an array of all values in the set.
    values() {
        return this.set;
    }


    //Return the amount of values in the set.
    size() {
        return this.set.length;
    }
}


