
var Queue = {front: null, back: null};


function Node(data, next) {
  this.data = data;
  this.next = next;
} 


function Enqueue(element) {
  var N = new Node(element, null);
  if (Queue.back === null) {
    Queue.front = N;
    Queue.back = N; 
  } else { 
    Queue.back.next = N; 
    Queue.back = Queue.back.next;
  } 
}


function Dequeue() {
  if (Queue.front !== null) { 
    var first = Queue.front;
    Queue.front = Queue.front.next; 
    return first.data;
  } else {
    if (Queue.back !== null) { Queue.back = null; }
    return 'Cannot dequeue because queue is empty';
  }
}

(Enqueue('x')); 
(Enqueue('y')); 
(Enqueue('z')); 
console.log(Dequeue());
// console.log(Dequeue());
console.log(Queue);


