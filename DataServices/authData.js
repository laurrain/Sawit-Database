module.exports = function (connection) {
var bcrypt = require('bcrypt');  
var counter = 0
var results = [];
var password;
var getData = function(query, inputData, cb){
      connection.query(query, inputData, cb);
  };
 var inputData = function(req, res, next){
 JSON.parse(JSON.stringify(req.body))
};

 var insertData = function(query, inputData, cb){
    connection.query(query, inputData, cb);
  }

   var postData = function(query, inputData, cb){
      connection.query(query, inputData, cb);
  };

this.showUser = function(inputData, cb){

      var sql = "SELECT * FROM user";
      getData(sql, cb)
}

this.showAdminPanel = function(inputData, cb){

      var sql = "SELECT * FROM user";
      getData(sql, cb)
}

this.promoteUser = function(inputData, cb){

      var sql = "UPDATE user SET admin = ?, locked = ? WHERE username=?";
  		postData(sql, [inputData.admin, inputData.locked, inputData.username], cb)
}

this.signup = function(inputData, cb){
    
    var sql = "INSERT INTO user(username, password) SELECT * FROM (SELECT ?, ?) AS tmp WHERE NOT EXISTS (SELECT username FROM user WHERE username = ?) LIMIT 1;";
    insertData(sql, [inputData.username, inputData.password, inputData.username], cb)
};

this.login = function(inputData, cb){

    var sql = 'SELECT * FROM user WHERE username = ?'
    getData(sql, inputData.username, cb)

              
    if(counter == 3 ){

    var sql = 'UPDATE user SET locked = ? WHERE username = ?';
    postData(sql, inputData.username, cb)
    }


	 
	};

this.lock = function(inputData, cb){

    var sql = 'UPDATE user SET locked = ? WHERE username = ?';
    postData(sql, [inputData.admin, inputData.username], cb)
  };
}