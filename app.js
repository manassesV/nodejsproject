var express = require('express'),
app = express();

var userService = require('./user_service');

//Create new user
app.post('/user', function(req, res) {

	var newUserEmail = req.headers['user-email'];
	var newUserPass = req.headers['user-pass'];

	userService.addUser(newUserEmail, newUserPass, 
		function(result) {
				return res.status(200).send(result);
		},
		function(error) {
				return res.status(401).send(error);
		})
	
});

//Perform authentication
app.post('/login', function(req, res){

	var userEmail = req.headers['user-email'];
	var userPassword = req.headers['user-pass'];

	userService.authenticate(userEmail, userPassword,
		function(result) {
				return res.status(200).send(result);
		},
		function(error) {
				return res.status(401).send(error);
		
        });
});

app.listen(process.env.PORT || 3000, function(){
	console.log('Server started...');
});