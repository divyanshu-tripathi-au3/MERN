// Create a Stack class using arrays and ES6 class.
// Stack is an ordered data structure that supports two functions - push and pop.
// push adds an element to a stack, where pop remove from it.
// The adding and removal of elements take a special order. 
// The last element added to a stack will be the first element to be removed from it, when called using push and pop respectively.

class Stack {

    constructor(){
        this.items =[]
        this.count = 0

   }


   push(item){
    this.items.push(item)
    this.count++
   }


   pop(){
       if (this.count > 0){
        this.count--
       }

       return this.items.pop()
   }

   getlength(){
       return this.count
   }

}

let stack = new Stack()

stack.push(1)
stack.push(2)

console.log(stack.pop())
console.log(stack.pop())
console.log(stack.getlength())