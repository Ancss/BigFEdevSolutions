// Can you create a range(from, to) which makes following work?

// for (let num of range(1, 4)) {
//   console.log(num)  
// }
// // 1
// // 2
// // 3
// // 4
// This is a simple one, could you think more fancy approaches other than for-loop?

// Notice that you are not required to return an array, but something iterable would be fine.
function range(from, to) {
  return {
    [Symbol.iterator]() {
      return {
        next() {
          return {
            done: from > to,
            value: from++
          }
        }
      }
    }
  }
}