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
  if(this.left) this.left.depthFirstTransversal(itetatorFunc, order);
  if(order === 'in-order') itetatorFunc(this.value);
  if(this.right) this.right.depthFirstTransversal(itetatorFunc, order);
}

const bst = new BST(100);

// Insert
bst.insert(10);
bst.insert(101);
bst.insert(5);
bst.insert(7);

// Contains
// console.log(bst.contains(50)); // false
// console.log(bst.contains(7)); // true

// DepthFirstTransversal in order
bst.depthFirstTransversal(log, 'in-order');


function log(value) {
  console.log(value)
}

