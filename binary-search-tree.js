function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function(value) {
  if(value <= this.value) {
    if(!this.left) this.left = new BST(value);
    else this.left.insert(value);
  } else if(value > this.value) {
    if(!this.right) this.right = new BST(value);
    else this.right.insert(value);
  }
};

BST.prototype.contains = function(value) {
  if(value === this.value) return true;
  if(value < this.value) {
    if(this.left === null) return false
    else return this.left.contains(value);
  }
  else if(value > this.value) {
    if(this.right === null) return false
    else return this.right.contains(value);
  }
};

BST.prototype.depthFirstTransversal = function(itetatorFunc, order) {
  if(order === 'pre-order') itetatorFunc(this.value);
  if(this.left) this.left.depthFirstTransversal(itetatorFunc, order);
  if(order === 'in-order') itetatorFunc(this.value);
  if(this.right) this.right.depthFirstTransversal(itetatorFunc, order);
  if(order === 'post-order') itetatorFunc(this.value);
}

BST.prototype.breadthFirstTransversal = function(interatorFunc) {
  const queue = [this];
  while(queue.length) {
    const treeNode = queue.shift();
    interatorFunc(treeNode.value);

    if(treeNode.left) queue.push(treeNode.left);
    if(treeNode.right) queue.push(treeNode.right);
  }
}

const bst = new BST(50);

// Insert
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(10);
bst.insert(45);
bst.insert(35);
bst.insert(60);
bst.insert(100);
bst.insert(59);
bst.insert(85);
bst.insert(105);

// Contains
// console.log(bst.contains(50)); // false
// console.log(bst.contains(7)); // true

// DepthFirstTransversal in order
console.log('## In-order');
// bst.depthFirstTransversal(log, 'in-order'); // pre-order | post-order | in-order

console.log('-----')
bst.breadthFirstTransversal(log);

function log(value) {
  console.log(value)
}

