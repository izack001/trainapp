
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBwIlbE0SDPsko4tBDfvCb3-Wvm8mS6hpE",
    authDomain: "isaacs-firebase.firebaseapp.com",
    databaseURL: "https://isaacs-firebase.firebaseio.com",
    projectId: "isaacs-firebase",
    storageBucket: "isaacs-firebase.appspot.com",
    messagingSenderId: "342456543992"
  };
 
  firebase.initializeApp(config);

  var database= firebase.database();

  // Buttons for adding Employees

$("#submit-btn").on("click", function(event){
	event.preventDefault();
	console.log(event);
///=====================================================================================================
	
//Collect User Input

	var trainName= $("#train-name").val().trim();
	var trainDestin=$("#destination").val().trim();
	var firstTrain= moment($("#first-train").val().trim(),"DD/MM/YY").format("X");
	var trainFrequ=$("#frequency").val().trim();

	console.log(firstTrain);

///Make Local "temporary" object for holding  data from train schedule
///===============================================================================

var newTrain = {
	
	name: trainName,
	destination: trainDestin,
	train: firstTrain,
	frequency: trainFrequ
};

///Push Data in The database=========================================

database.ref().push(newTrain);

//log all data to console 

console.log(newTrain.name);
console.log(newTrain.destination);
console.log(newTrain.train);
console.log(newTrain.frequency);
});


