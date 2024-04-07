// We have SomeChannel which allows us to send messages between 2 ports.

// const {port1, port2} = new SomeChannel()

// port2.onmessage = (message) => {
//   console.log(message) // hi
// }
// port1.postMessage('hi')
// It looks like MessageChannel, but SomeChannel is not in good condition, it has random delay in sending the messages, which means the order messages are sent might be different from the order they are received.

// Now your job is to create a BetterChannel that enables communication between ports with callback and reply handle, but on top of SomeChannel.

const { port1, port2 } = new BetterChannel();

port2.onmessage = (message, reply) => {
  if (message === "ping?") {
    reply("pong!");
  }
  if (message === "pong?") {
    reply("ping!");
  }
};

port1.postMessage("ping?", (data) => {
  console.log(data); // 'pong!'
});
// you should avoid global state outside of the classes.
// internally SomeChannel must be used.
// though there might be delays, messages are guaranteed to be delivered through SomeChannel, but it is worthy for you to think about the case in which messages might be dropped.

// This is a JavaScript coding problem from BFE.dev

// interface SomePort {
//   postMessage: (message: string) => void
//   onmessage?: (message: string) => void
// }

// declare class SomeChannel {
//   port1: SomePort
//   port2: SomePort
// }

const invoke = (fn, ...args) => typeof fn === 'function' && fn(...args)
const once = fn => (...args) => { invoke(fn, ...args); fn = null }

const wrap = port => {
  const facade = {}
  facade.postMessage = (message, reply) => { port.postMessage({ message, reply }) }
  port.onmessage = ({ message, reply }) => { invoke(facade.onmessage, message, once(reply)) }
  return facade
}

class BetterChannel {
  constructor() {
    const infra = new SomeChannel()
    this.port1 = wrap(infra.port1)
    this.port2 = wrap(infra.port2)
  }
}