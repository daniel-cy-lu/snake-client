const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  // name is display on snake when connected to server
  conn.on('connect', () => {
    conn.write('Name: DLU'); 
  })

  conn.setEncoding("utf8");
  
  // return data when the server kicks user out
  conn.on('data', (data) => {
    console.log(data);
  });
  
  return conn;
};

module.exports = connect;

