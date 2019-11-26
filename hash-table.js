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

const myHT = new HashTable(30);
console.log(myHT.hash('marina'));
