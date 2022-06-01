var EventEmitter = require("events");
var eventEmitter = new EventEmitter();

eventEmitter.on('start', (start, end) => {
  console.log(`Started ${start} to ${end}`)
})

eventEmitter.emit('start', 1,100);
//eventEmitter.emit('start', 1,100);

//event tobe fired only one time using once
eventEmitter.once('eventOnce', () => console.log('eventOnce once is fired'));
eventEmitter.emit('eventOnce');
eventEmitter.emit('eventOnce');

