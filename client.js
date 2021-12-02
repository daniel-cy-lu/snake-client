const net = require("net");
const {IP, PORT} = require('./constants')

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
});

  // name is display on snake when connected to server
  conn.on('connect', () => {
    conn.write('Name: DLU'); 
  })
  
  // conn.on('connect', () => {
    
  //     setInterval(() => {
  //       conn.write('Move: up')
  //     }, 500
  //     );
  //     setTimeout(() => {
  //       setInterval(() => {
  //         conn.write('Move: right')
  //       }, 500 
  //       );
  //   })
  // })

  conn.setEncoding("utf8");
  
  // return data when the server kicks user out
  conn.on('data', (data) => {
    console.log(data);
  });
  
  return conn;
};

module.exports = connect;

