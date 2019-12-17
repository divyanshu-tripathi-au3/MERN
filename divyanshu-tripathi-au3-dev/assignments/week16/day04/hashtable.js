class HashTable {
    constructor(size){
        this.keyMap = new Array(size);
    }

    hash(key){
        let total = 0;
        let primenum = 19;
        for(let i = 0; i < key.length; i++){
            let value = key[i].charCodeAt(0) - 96;
            total = (total * primenum + value) % this.keyMap.length;
        }

        return total;
    }

    set(key, value){
        let index = this.hash(key);
        if (!this.keyMap[index]){
             this.keyMap[index] = [];
        }

        this.keyMap[index].push([key, value]);
    }

    get (key){
        let index = this.hash(key);
        if (this.keyMap[index]){
            for(let i = 0; i < this.keyMap[index].length; i++){
                if (this.keyMap[index][i][0]== key){
                    return this.keyMap[index][i][1];
                }
                
            }
        }   

        return undefined;
    }

    delete(key){
        let index = this.hash(key);
        if (this.keyMap[index]){
            for(let i = 0; i < this.keyMap[index].length; i++){
                if (this.keyMap[index][i][0]== key){
                     this.keyMap[index].splice(i, 1);
                      return this.keyMap;
                }
                
            }
        }   

        return undefined;
    }

   
}

let ht = new HashTable(3);
ht.set("Cat","changu");
ht.set("dog","shera");
ht.set("rabbit","mangu");
