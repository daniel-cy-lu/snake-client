const connect = require('./client');
const input = require('./input');



console.log("Connecting ...");
// call connect func from client.js
connect();
// call setupInput func from input.js
input();

