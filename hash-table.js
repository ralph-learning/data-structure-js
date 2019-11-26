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
  else if(this.bucket[index].key === key) {
    this.bucket[index].value = value;
  }
  else {
    let currentNode = this.bucket[index];
    while(currentNode.next) {
      currentNode = currentNode.next;
      if(currentNode.next.key === key) {
        currentNode.next.value = value;
        return;
      }
    }
    currentNode.next = new HashNode(key, value);
  }
}

const myHT = new HashTable(30);

myHT.insert('Joao', 'joao@example.co');
myHT.insert('Joao', 'joaoupdate@gmail.com');
myHT.insert('Gabi', 'gabi@gmail.com')
myHT.insert('Gabi', 'gabi@yahoo.com')
myHT.insert('Giba', 'giba@gmail.com')

console.log(myHT);
