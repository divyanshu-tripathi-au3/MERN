// @channel Extend yesterday's question to delete any element from the heap. 
// Given an element, find it's index and delete from the heap and heapify the tree.



class Heap{
    constructor(){
        this.heaparr = [];
    }
    add(val){
        this.heaparr.push(val);
        this.heapifyUp();
    }
    heapifyUp(){
        var parentIndex;
        var currenIndex = this.heaparr.length - 1;
        while(currenIndex > 0){
            parentIndex = Math.floor((currenIndex - 1) / 2);
            if(this.heaparr[currenIndex] > this.heaparr[parentIndex]){
                [this.heaparr[currenIndex] , this.heaparr[parentIndex]] = [this.heaparr[parentIndex] , this.heaparr[currenIndex]] ;
            }else{
                break;
            }
            currenIndex = parentIndex;
        }
    }
    remove(){
        if(this.heaparr.length === 0) return null; 
        if(this.heaparr.length === 1){
           return this.heaparr.pop();
        }
        this.heaparr[0] = this.heaparr.pop();
        this.heapifyDown()
    }
    heapifyDown(){
        var swipeIndex;
        var parentIndex = 0;

        while(parentIndex < this.heaparr.length - 1){
            var left = Math.floor((2 * parentIndex) + 1);
            var right = Math.floor((2 * parentIndex) + 2);
        if( right <= this.heaparr.length - 1 && this.heaparr[left] < this.heaparr[right] ){
            swipeIndex = right;
            
        }else{
            swipeIndex = left;
        }
        if(this.heaparr[parentIndex] < this.heaparr[swipeIndex]){
            [this.heaparr[parentIndex] , this.heaparr[swipeIndex]] = [this.heaparr[swipeIndex] , this.heaparr[parentIndex]];
            parentIndex = swipeIndex;
        }else{
            break;
        }
        }
    }
    removeByIndex(val){
        var valindex = this.getIndex(val);
        if(valindex == 0){
            this.remove()
        }else{

            this.heaparr[valindex] = this.heaparr.pop();

            var parentIndex = valindex;
            var swipeIndex;

        while(parentIndex < this.heaparr.length - 1){
            var left = Math.floor((2 * parentIndex) + 1);
            var right = Math.floor((2 * parentIndex) + 2);
        if( right <= this.heaparr.length - 1 && this.heaparr[left] < this.heaparr[right] ){
            swipeIndex = right;
            
        }else{
            swipeIndex = left;
        }
        if(this.heaparr[parentIndex] < this.heaparr[swipeIndex]){
            [this.heaparr[parentIndex] , this.heaparr[swipeIndex]] = [this.heaparr[swipeIndex] , this.heaparr[parentIndex]];
            parentIndex = swipeIndex;
        }else{
            break;
            }
            } 
        }
    }
    getIndex(val){
        return this.heaparr.indexOf(val);
    }
    print(){
        this.heaparr.forEach(val => console.log(val));
        console.log("Done");
    }
}


var heap = new Heap();

heap.add(2);
heap.print();
heap.add(5);
heap.print();
heap.add(1);
heap.print();
heap.add(6);
heap.print();
heap.add(7);
heap.print();
heap.removeByIndex(1);
heap.print();