/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);
  return;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop();
  return;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  // requires Node 16.6.0:
  // return this.stack.at(-1);

  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return Math.min(...this.stack);
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log("\nexpect to be -3", minStack.getMin()); // return -3
minStack.pop();
console.log("\nexpect to be 0", minStack.top()); // return 0
console.log("\nexpect to be -2", minStack.getMin()); // return -2
