'use strict';
import nodeColor from './color'
import { toNumber } from './helper';
/**
 * Node of the red black tree
 * constructor
 * param key : Number
 * param value : Object
 * param left : Node
 * param right : Node
 * param color : Number
 */

class Node {
  constructor(key, value, id  ) {
    this.key = toNumber(key);
    this.id = id;
    this.value = value;
    this.left = null;
    this.right = null;
    this.color = null;
    this.parent = null;
  }

  /**
  * return Boolean
  */
  isRed() {
    return this.color === nodeColor.RED
  }

  getValue() {
    return {
      key: this.key,
      id: this.id,
      value: this.value,
    }
  }

  getValueKeyArray() {
    return [  this.id, this.value, this.key, ]
  }

}
export default Node;
