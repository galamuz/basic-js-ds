const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  getUnderlyingList() {
    return this.first;
  }

  enqueue(value) {
    let temp = new ListNode(value);
    if (this.last === null) {
      this.first = temp;
      this.last = temp;
      return;
    }

    this.last.next = temp;
    this.last = temp;
  }

  dequeue() {
    if (this.first === null) {
      return null;
    }

    let temp = this.first.value;
    this.first = this.first.next;

    if (this.first === null) {
      this.last = null;
    }

    return temp;
  }
}

module.exports = {
  Queue
};
