let connection;

// setup interface to handle user input from stdin
const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  } else if (key === 'w') {
    console.log('W is pressed');
    connection.write('Move: up');
  } else if (key === 's') {
    console.log('S is pressed');
    connection.write('Move: down');
  } else if (key === 'a') {
    console.log('A is pressed');
    connection.write('Move: left');
  } else if (key === 'd') {
    console.log('D is pressed');
    connection.write('Move: right');
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
