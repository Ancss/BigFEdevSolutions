// In JavaScript, we could use array to work as both a Stack or a queue.

// const arr = [1, 2, 3, 4]

// arr.push(5) // now array is [1, 2, 3, 4, 5]
// arr.pop() // 5, now the array is [1, 2, 3, 4]
// Above code is a Stack, while below is a Queue

// const arr = [1, 2, 3, 4]

// arr.push(5) // now the array is [1, 2, 3, 4, 5]
// arr.shift() // 1, now the array is [2, 3, 4, 5]
// now suppose you have a stack, which has only follow interface:

// class Stack {
//   push(element) { /* add element to stack */ }
//   peek() { /* get the top element */ }
//   pop() { /* remove the top element */}
//   size() { /* count of elements */}
// }
// Could you implement a Queue by using only above Stack? A Queue must have following interface

// class Queue {
//   enqueue(element) { /* add element to queue, similar to Array.prototype.push */ }
//   peek() { /* get the head element*/ }
//   dequeue() { /* remove the head element, similar to Array.prototype.pop */ }
//   size() { /* count of elements */ }
// }
// note

// you can only use Stack as provided, Array should be avoided for the purpose of practicing.


/* you can use this Class which is bundled together with your code

class Stack {
  push(element) { // add element to stack }
  peek() { // get the top element }
  pop() { // remove the top element}
  size() { // count of element }
}
*/

/* Array is disabled in your code */
class Stack {
  push(element) { } // add element to stack }
  peek() { }// get the top element }
  pop() { } // remove the top element}
  size() { } // count of element }
}
// you need to complete the following Class
class Queue {
  stack: Stack
  constructor() {
    this.stack = new Stack()
  }
  enqueue(element) {
    this.stack.push(element)
  }
  peek() {
    this.stack = this._reverse(this.stack)
    return this.stack.peek()
  }
  size() {
    return this.stack.size()
  }
  dequeue() {
    this.stack = this._reverse(this.stack)
    this.stack.pop()
    this.stack = this._reverse(this.stack)
    return this.stack
  }
  _reverse(stack: Stack) {
    const reverseStack = new Stack()
    while (stack.size()) {
      reverseStack.push(stack.pop())
    }
    return reverseStack
  }
}

const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
console.log(queue)
