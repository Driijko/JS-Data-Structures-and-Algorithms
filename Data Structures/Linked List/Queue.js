const {LinkedListNode} = require("./LinkedListNode");
const {LinkedList} = require("./LinkedList");

class Queue extends LinkedList{
  constructor() {
    super();
  }

  enqueue(value) {
    this.append(value);
  }

  dequeue() {
    if (this.head) {
      let temp = this.head;
      if(this.head.next !== null) {
        this.head = temp.next;
      }
      else {
        this.head = null;
        this.tail = null;
      }
      return temp.value;
    }
    else {
      return null;
    }
  }

  front() {
    if (this.head) {
      return this.head.value;
    }
    else return null;
  }

  rear() {
    if (this.tail) {
      return this.tail.value;
    }
    else return null;
  }
}

module.exports.Queue = Queue;

// const queue = new Queue;
// queue.enqueue(15);
// // console.log(queue.front());
// // console.log(queue.rear());

// queue.enqueue(45);
// queue.enqueue(34543);
// queue.enqueue(3);

// // console.log(queue.front());
// // console.log(queue.rear());


// console.log(queue.head.next);

// // queue.dequeue();
// // console.log(queue);
// // queue.dequeue();
// // console.log(queue);
// // console.log(queue.dequeue());