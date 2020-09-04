var redis = require('redis');

var connection = redis.createClient({
    port      : 6379,               // replace with your port
    host      : '127.0.0.1',        // replace with your hostanme or IP address
 //   password  : 'your password',    // replace with your password
    // optional, if using SSL
    // use `fs.readFile[Sync]` or another method to bring these values in
 //   tls       : {
   //   key  : stringValueOfKeyFile,  
     // cert : stringValueOfCertFile,
     // ca   : [ stringValueOfCaCertFile ]
   // }
  });
  
connection.on("error", function(error) {
  console.error(error);
});



// add port to listen to
module.exports = connection;
