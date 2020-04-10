var  firebaseRef = require('firebase');


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB4OyYSh8hZqwMeqUvng7xpegSUB_reBxY",
    authDomain: "nodejs-3b448.firebaseapp.com",
    databaseURL: "https://nodejs-3b448.firebaseio.com",
    projectId: "nodejs-3b448",
    storageBucket: "nodejs-3b448.appspot.com",
    messagingSenderId: "768755335386",
    appId: "1:768755335386:web:6f5160c6f871d79a8825e3"
  };
  // Initialize Firebase
  firebaseRef.initializeApp(firebaseConfig);
  
  

function addUser(email, password, callback, erro) {
	
	
    firebaseRef.auth().createUserWithEmailAndPassword(email, password).then(function(result) {
       callback(result);
    }).catch(function(error) {
       erro(error);
    });
  
  

}


function authenticate(email, password, callback, erro) {
	
	
	firebaseRef.auth().signInWithEmailAndPassword(email, password).then(function(result) {
        callback(result);
    }).catch(function(error) {
        erro(error);
    });

}

module.exports = {

	addUser : addUser,
	authenticate : authenticate

}