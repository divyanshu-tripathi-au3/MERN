// Given an array which is a max Heap [27, 15, 24, 9, 13, 7, 3], 
// write a new function to insert the element and write a function to delete the element.


let MaxHeap = function() {
	
	let heap = [null];
	
	this.print = () => heap;

	this.insert = function(num) {
		heap.push(num);
		if (heap.length > 2) {
			let idx = heap.length - 1;
			while (heap[idx] > heap[Math.floor(idx/2)]) {
				if (idx >= 1) {
					[heap[Math.floor(idx/2)], heap[idx]] = [heap[idx], heap[Math.floor(idx/2)]];
					if (Math.floor(idx/2) > 1) {
						idx = Math.floor(idx/2);
					} else {
						break;
					};
				};
			};
		};
	};
	
    this.remove = function() {
		let smallest = heap[1];
		if (heap.length > 2) {
			heap[1] = heap[heap.length - 1];
			heap.splice(heap.length - 1);
			if (heap.length == 3) {
				if (heap[1] < heap[2]) {
					[heap[1], heap[2]] = [heap[2], heap[1]];
				};
				return smallest;
			};
			let i = 1;
			let left = 2 * i;
			let right = 2 * i + 1;
			while (heap[i] <= heap[left] || heap[i] <= heap[right]) {
				if (heap[left] > heap[right]) {
					[heap[i], heap[left]] = [heap[left], heap[i]];
					i = 2 * i
				} else {
					[heap[i], heap[right]] = [heap[right], heap[i]];
					i = 2 * i + 1;
				};
				left = 2 * i;
				right = 2 * i + 1;
				if (heap[left] == undefined || heap[right] == undefined) {
					break;
				};
			};
		} else if (heap.length == 2) {
			heap.splice(1, 1);
		} else {
			return null;
		};
		return smallest;
	};

};

// ==========================================================



class Heap{
    constructor(){
        this.heap = [];
    }

    add (value){
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp(){
        let currentIndex = this.heap.length -1;
        let parentIndex;

        while(currentIndex > 0){
            parentIndex =  Math.floor((currentIndex - 1)/ 2);
            if (this.heap[currentIndex] >  this.heap[parentIndex]){
                this.swap(currentIndex, parentIndex);
               
            }
            else{
                break;
            }
            currentIndex = parentIndex;
        }

    }

    printHeap(){
        this.heap.forEach(val =>  console.log(val));
    }

    swap(i, j){
        let temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }

    remove(){
        console.log("remove:", this.heap[0]);
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        this.heap[0] = this.heap.pop();
        this.heapifyDown();
    }
    
    heapifyDown(){
        let currentIndex = 0;
        let heapLength = this.heap.length -1;
        let indextoSwap;

        while(currentIndex< heapLength){
            let leftChildIndex =  2*currentIndex + 1;
            let rightChildIndex = 2*currentIndex + 2;


            if (rightChildIndex <= heapLength && this.heap[leftChildIndex] < this.heap[rightChildIndex])
                indextoSwap = rightChildIndex;
            else if(leftChildIndex <= heapLength)
                indextoSwap = leftChildIndex;
            else
                break;    
    
            if(this.heap[currentIndex] < this.heap[indextoSwap])
                   this.swap(currentIndex, indextoSwap);
            else
                break;
                currentIndex = indextoSwap;       

        }
       
   
    }


}



let heapObj = new Heap();
heapObj.add(1);

heapObj.add(2);
heapObj.add(3);
heapObj.printHeap();


heapObj.remove(2);
heapObj.printHeap();




