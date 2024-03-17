/*
Chapter 4 - Event Emitter
In a way to create signal or custom events so that it can respond to that event 
*/

/*
const { format } = require("date-fns");
const { uuid } = require("uuid");
const fs = require("fs");
const fsPromise = require("fs").promises;
const path = require("path");

const logEvents = async () => {
  const dateTime = format(new Date(), "yyyyMMdd\tHH:mm:ss");
  const logItem = `${dateTime}\t${uuid()}\t${message}`;
  console.log(logItem);

  try {
    await fsPromise.appendFile(path.join(__dirname, "eventLog.txt"), logItem);
  } catch (err) {
    console.log(err);
  }
};

module.exports = logEvents;
*/

/*
Notes on event emitter
events have be duplicates, in that case it would run all the duplicates
.on() will run all the duplicates and will not remove the program
.once() will run only once and would remove the emit from the program
*/
const EventEmitter = require("events");

class Emitter extends EventEmitter {}

const myEmitter = new Emitter();

myEmitter.on("foo", () => {
  console.log("1 Event occurred");
});
myEmitter.on("foo", () => {
  console.log("2 Event occurred");
});

myEmitter.emit("foo");
