const {Comparator} = require("../../Utils/Comparator");
const {LinkedListNode} = require("./LinkedListNode");

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  // constructor(compartorFunction) {
  //   this.head = null;
  //   this.tail = null;
  //   this.compare = new Comparator(comparatorFunction);
  // }

  prepend(value) {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  append(value) {
    const newNode = new LinkedListNode(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }

  delete(value) {
    if (this.head === null) {
      return null;
    }

    let currentNode = this.head;
    let lastNode = null;

    while (!(currentNode === null)) {
      if (currentNode.value === value) {
        if (currentNode === this.head) {
          if (this.tail === this.head) {
            this.tail = null;
          }
          this.head = currentNode.next;
          return currentNode;
        } else if (currentNode === this.tail) {
          lastNode.next = null;
          this.tail = lastNode;
          return currentNode;
        }

        lastNode.next = currentNode.next;
        return currentNode;
      }

      lastNode = currentNode;
      currentNode = currentNode.next;
    }

    return null;

  }
}

module.exports.LinkedList = LinkedList;

// const linkedList = new LinkedList();
// linkedList.prepend(4);
// console.log(linkedList);
