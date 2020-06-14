const {Comparator} = require("../../Utils/Comparator");
const {LinkedListNode} = require("./LinkedListNode");
const {LinkedList} = require("./LinkedList");

class Stack extends LinkedList{
  constructor() {
    super();
    // this.head = null;
  }

  isEmpty() {
    return this.head === null;
  }

  peek() {
    if (this.head) {
      return this.head.value;
    }
    else return null;
  }

  pop() {
    if (this.head) {

      let temp = this.head;

      if (this.head.next) {
        this.head = temp.next;
      }
      else {
        this.head = null;
      }

      return temp.value;
    }
    else return null;
  }

  push(value) {
    this.prepend(value);
  }
}

// module.exports.Stack = Stack;

const stack = new Stack;
stack.push(5);
stack.push(6);
stack.push(10);
stack.push(13);
console.log(stack.head.next);
// stack.
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isEmpty());
