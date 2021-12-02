const {UP, DOWN, RIGHT, LEFT} = require('./constants');

let connection;

// setup interface to handle user input from stdin
const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  } else if (key === UP) {
    console.log('W is pressed');
    connection.write('Move: up');
  } else if (key === DOWN) {
    console.log('S is pressed');
    connection.write('Move: down');
  } else if (key === LEFT) {
    console.log('A is pressed');
    connection.write('Move: left');
  } else if (key === RIGHT) {
    console.log('D is pressed');
    connection.write('Move: right');
  } else if (key === 'n') {
    connection.write('Say: Ni Hao');
  } else if (key === 'v') {
    connection.write('Say: I win!')
  }
}

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = setupInput
