class Node{
    constructor(val, next = null){
        this.value =val;
        this.next =next;
    }
}

class singlyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    addFirst(val){
        this.head = new Node(val, this.head);
        if (!this.tail){
            this.tail = this.head;
        }
    }
// ================================================

    addMiddle(val, elementToSearch){
        let current = this.head;
        while(current){
            if (current.value == elementToSearch){
                current.next = new Node(val, current.next);
            }

            current = current.next;
        }
    }

    // =======================================================

    addEnd(val){
        if (this.tail){
            this.tail.next = new Node(val);
            this.tail =  this.tail.next;
    }
    else{
        this.tail = new Node(val);
        this.head = this.tail;
        }
    }

// ========================================
    deleteFirst(){
        if (!this.head){
            return null;
        }
        this.head = this.head.next;
    }

// ================================================

deleteMiddle(elementToSearch){
    if (!this.head){
        return null;
    }

    if(this.head.value == elementToSearch){
        this.head = this.head.next;
    }
    let current = this.head;
     while(current.next){
        if (current.next.value == elementToSearch){
            if (this.tail == current.next){
                this.tail = current;
            }
            current.next = current.next.next;
            break;
        }
        current = current.next;
        
     }
    
}




//   ===========================================  
    deleteEnd(){
        if (!this.head){
            return null;
        }
        let current = this.head;
        while(current.next.next){
            current = current.next;
        }

        current.next = null
        this.tail = current;
    }
    
    // ============================================

  

    print(){ 
        while(this.head){
            console.log(this.head.value);
            this.head = this.head.next;
        }
    }

}

var list = new singlyLinkedList();
list.addFirst(6);
list.addEnd(7);
list.addEnd(9);
list.addMiddle(8,7);
list.deleteFirst();
list.deleteEnd();
list.deleteMiddle(8);
list.print();