function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, prev, next) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

LinkedList.prototype.addHead = function addHead(value) {
  const newNode = new Node(value, this.head, null);
  if(this.head) this.head.prev = newNode;
  else this.tail = newNode;
  this.head = newNode;
}

