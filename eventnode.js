const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
  setTimeout(()=>{
      console.log("event occcured again")
  },3000)
});
console.log("this script is running")
myEmitter.emit('event');