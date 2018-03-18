  require ('dotenv').config();

  // Initialize Firebase
  var config = {
    apiKey: process.env.GOOGLE_API_KEY,
    authDomain: "fir-tutorial-c6aa1.firebaseapp.com",
    databaseURL: "https://fir-tutorial-c6aa1.firebaseio.com",
    projectId: "fir-tutorial-c6aa1",
    storageBucket: "fir-tutorial-c6aa1.appspot.com",
    messagingSenderId: "155080021447"
  };

  firebase.initializeApp(config);

  var header = document.getElementById('header');

//pointer to database, telling it where to look
  var dbRef = firebase.database().ref.child('header');

//dbRef.on('value') means whenever value changes in Firebase, this will trigger the following code to run, the function taking snap as a parameter
//snap is a snapshot of the header node
//sets header's innerText (the H1) with the data
dbRef.on('value', function(snap){
    header.innerText = snap.val();
})

