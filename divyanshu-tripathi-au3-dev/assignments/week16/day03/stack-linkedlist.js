
var EX = {};
EX.StackNode = function(){
	this.item = null;
	this.next = null;
}

EX.LinkedStack = function(){
	var head = null;
	var size = null;
	
	
	this.pushToStack = function(item){
		var node = new EX.StackNode();
		node.item = item;
		node.next = null;
		if(size < 1 && head === null){
			head = node;
			head.next = null;
			size = 1;
		}else{
			var current = head;
			while(current.next !== null){
				current = current.next;
			}
			current.next = node;
			size += 1;
		}
	}
	
	this.popFromStack = function(){
		var current = head;
		if(size === 0){
			return;
		}
		if(size === 1){
			head = null;
			size = 0;
			return current;
		}
		var prev = current;  
		while(current.next !== null){
				prev = current;
				current = current.next;
		}
		prev.next = null;
		size -= 1;
		return current;
	}
	

	this.isStackEmpty = function(){
		return (size < 1) ? true : false;
	}
	
	
	this.stackTop = function(){
		var current = head;
		if(size > 0 && head !== null){
			while(current.next !== null){
				current = current.next;
			}
			return current.item;
		}else{
			console.log("There is no item in the stack");
			return null;
		}
	}
	
	this.printStack = function(){
		var current = head;
		while(current.next !== null){
			console.log("Item "+current.item + " is on the stack.");
			current = current.next;
		}
		console.log("Item "+current.item + " is on the stack.");
	}
	
}



var stack = new EX.LinkedStack();
console.log(stack.isStackEmpty());

stack.pushToStack("Test1");
console.log(stack.stackTop().item);

stack.pushToStack("Test2");
stack.pushToStack("Test3");
stack.printStack();

var poped =  stack.popFromStack();
// var poped = stack.popFromStack();

console.log("Popped item is till : " + poped.item);
stack.printStack();





// =========================================================================================
// class Node{
//     constructor(value){
//         this.val = value;
//         this.next = null;
//     }
// }
// class Stack{
//     constructor(){
//         this.first = null;
//         this.last = null;
//         this.size = 0;
//     }

//     // ==========================================
//     push(value){
//         const newNode = new Node(value);
//         if(!this.first) {
//             this.first = newNode;
//             this.last = this.first;
//         }else{
//             const temp = this.first;
//             this.first = newNode;
//             this.first.next = temp;
//         }
//         this.size++;
//         return this.size;
//     }

//     // =================================================
//     pop(){
//         if(!this.first) return undefined;
//         const temp = this.first;
//         this.first = temp.next;
//         this.size--;
//         if(this.size == 0) this.last=null;
//         return temp.val;
//     }
// }


// let stackLink = new Stack();
// console.log('Empty StackLink');


// console.log(stackLink.push('FIRST'));			
// console.log(stackLink.push('SECOND'));			
// console.log(stackLink.push('THIRD'));


// console.log('Pop items : FIRST OUT');
// console.log(stackLink.pop());			
// console.log(stackLink.pop());			
// console.log(stackLink.pop());		
