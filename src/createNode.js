'use strict';
import Node from './treeNode';
import nodeColor from './color';

function createUniqueId(){
  return Math.random().toString() + '_' + Math.random().toString()
}

function createNode(key,  value, id = createUniqueId() ) {
  let node = new Node(key,  value, id);

  //left leaf has color black. left, right to be nul
  let leftLeaf = new Node(null, null,null);
  leftLeaf.color = nodeColor.BLACK;
  leftLeaf.left = null;
  leftLeaf.right = null;
  leftLeaf.parent = node;

  //right leaf has color black. left, right to be nul
  let rightLeaf = new Node(null, null, null);
  rightLeaf.color = nodeColor.BLACK;
  rightLeaf.left = null;
  rightLeaf.right = null;
  rightLeaf.parent = node;

  //map leaves
  node.left = leftLeaf;
  node.right = rightLeaf;
  return node;
}
export default createNode;
