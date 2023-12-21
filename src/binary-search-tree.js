const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    let newNode = new Node(data);
    if (this.rootNode == null) {
      this.rootNode = newNode;
      return this;
    }

    let current = this.rootNode;
    while (current !== null) {
      if (data === current.data) return undefined;

      if (data < current.data) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }



  has(data) {
    return this._searchNode(this.rootNode, data) !== null;
  }

  find(data) {
    return this._searchNode(this.rootNode, data);
  }

  _searchNode(node, data) {
    if (node === null || node.data === data) {
      return node;
    }

    if (data < node.data) {
      return this._searchNode(node.left, data);
    } else {
      return this._searchNode(node.right, data);
    }
  }

 

  _removeNode(node, data) {
    if (node === null) {
      return null;
    }

    if (data < node.data) {
      node.left = this._removeNode(node.left, data);
    } else if (data > node.data) {
      node.right = this._removeNode(node.right, data);
    } else {
      // finde node
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      } else {
        // if 2 children
        let minRight = this._findMin(node.right);
        node.data = minRight.data;
        node.right = this._removeNode(node.right, minRight.data);
      }
    }

    return node;
  }

  _findMin(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  remove(data) {
    return this.rootNode = this._removeNode(this.rootNode, data)

  }

  min() {
    return this._findMin(this.rootNode).data;

  }

  max() {
    if (this.rootNode === null) {
      return this.rootNode;
    }
    let maxNode = this.rootNode;
    while (maxNode.right !== null) {
      maxNode = maxNode.right;
    }
    return maxNode.data;

  }
}

module.exports = {
  BinarySearchTree
};