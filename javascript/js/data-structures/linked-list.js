class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addStart(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    // node.next = tempHead;
  }

  addEnd(value) {
    const node = new Node(value);
    let curr = this.head;

    if (curr == null) {
      this.head = node;
      return;
    }

    while (curr != null && curr.next != null) {
      curr = curr.next;
    }

    curr.next = node;
  }
}

const list = new LinkedList();
list.addStart(1);
list.addStart(2);
list.addEnd(3);
console.log(list.head.next.next.next); // null
