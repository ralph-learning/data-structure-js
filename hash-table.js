function HashTable(size) {
  this.bucket = Array(size);
  this.size = this.bucket.length;
}

function HashNode(key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next || null;
}

HashTable.prototype.hash = function(key) {
  let total = 0;
  for(let i = 0; i < key.length; i++) {
    total += key.charCodeAt(i);
  }

  const bucket = total % 29;
  return bucket;
}

HashTable.prototype.insert = function(key, value) {
  const index = this.hash(key);
  if(!this.bucket[index]) this.bucket[index] = new HashNode(key, value);
  else {
    let currentNode = this.bucket[index];
    while(currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = new HashNode(key, value);
  }
}

const myHT = new HashTable(30);
myHT.insert('name', 'Ralph');
myHT.insert('test', 'Marina');
console.log(myHT);
