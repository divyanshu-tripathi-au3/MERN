// a Implement priority queue by extending the heap implemented earlier, and have the below functions
// 1) Add item with priority
// 2) Remove given item
// 3) Change the priority for the item


class Priorityqueue extends Heap{
    constructor(){
        let compare = function(a,b){
            return this.priorities[a] < this.priorities[b];
        }

        super (compare);
        this.priorities ={};
    }


    add(item, priority){
        this.priorities[item] = priority;
        super.addToHeap(item);
    }

    remove(item){
        super.remove(item);
        delete this.priorities[item];
    }

    changepriority(item, priority){
        super.remove(item);
        this.add(item, priority);
    }

}

let pq = new Priorityqueue();
pq.add("p" , 1);
pq.add("q" , 2);
pq.add("r" , 3);

pq.remove("p");
pq.changepriority("q", 4)






















// function PriorityQueue () {
//     var collection = [];
//     this.printCollection = function() {
//       (console.log(collection));
//     };
//     this.enqueue = function(element){
//         if (this.isEmpty()){ 
//             collection.push(element);
//         } else {
//             var added = false;
//             for (var i=0; i<collection.length; i++){
//                  if (element[1] < collection[i][1]){ 
//                     collection.splice(i,0,element);
//                     added = true;
//                     break;
//                 }
//             }
//             if (!added){
//                 collection.push(element);
//             }
//         }
//     };
//     this.dequeue = function() {
//         var value = collection.shift();
//         return value[0];
//     };
   
//     this.size = function() {
//         return collection.length; 
//     };
//     this.isEmpty = function() {
//         return (collection.length === 0); 
//     };
// }

// var pq = new PriorityQueue(); 

// pq.enqueue(['Beau Carnes', 2]); 
// pq.enqueue(['Quincy Larson', 3]);
// pq.enqueue(['Ewa Mitulska-Wójcik', 1])
// pq.enqueue(['Briana Swift', 2])
// pq.printCollection();
// pq.dequeue();

// pq.printCollection();
