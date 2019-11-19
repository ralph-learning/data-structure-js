function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

LinkedList.prototype.addHead = function(value) {
  const newNode = new Node(value, this.head, null);
  if(this.head) this.head.prev = newNode;
  else this.tail = newNode;
  this.head = newNode;
}

LinkedList.prototype.addTail = function(value) {
  const newNode = new Node(value, null, this.tail);
  if(this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode;
}

LinkedList.prototype.removeHead = function() {
  if(!this.head) return null;
  const value = this.head.value;
  this.head = this.head.next;
  if(this.head) this.head.prev = null;
  else this.tail = null;
  return value;
}

LinkedList.prototype.removeTail = function() {
  if(!this.tail) return null;
  const value = this.tail.value;
  this.tail = this.tail.prev;
  if(this.tail) this.tail.next = null;
  else this.head = null;
  return value;
}

LinkedList.prototype.search = function(searchValue) {
  let currentNode = this.head;

  while(currentNode) {
    if(currentNode.value === searchValue) return currentNode.value;
    currentNode = currentNode.next;
  }

  return null;
}

const ll = new LinkedList();

ll.addHead(100);
ll.addHead(200);
ll.addHead(300);

ll.addTail(50);

console.log(ll.search(210));
