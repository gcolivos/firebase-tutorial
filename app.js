
// Initialize Firebase
var config = {
  apiKey: "AIzaSyA-eU3PwVrRIIwM-f2hVgrz4fLW-L-9FsE",
  authDomain: "fir-tutorial-c6aa1.firebaseapp.com",
  databaseURL: "https://fir-tutorial-c6aa1.firebaseio.com",
  projectId: "fir-tutorial-c6aa1",
  storageBucket: "fir-tutorial-c6aa1.appspot.com",
  messagingSenderId: "155080021447"
};

firebase.initializeApp(config);

var header = document.getElementById('header');

//pointer to database, telling it where to look
var dbRef = firebase.database().ref().child('header');

//dbRef.on('value') means whenever value changes in Firebase, this will trigger the following code to run, the function taking snap as a parameter
//snap is a snapshot of the header node
//sets header's innerText (the H1) with the data

var signInButton = document.getElementById('signInButton');
var signOutButton = document.getElementById('signOutButton');
var provider = new firebase.auth.GoogleAuthProvider();

signInButton.addEventListener('click', function(){
  firebase.auth().signInWithPopup(provider).then(function(user){
    if (user){
      dbRef.on('value', function (snap) {
        header.innerText = snap.val();
      });

      playgroundRef.on('value', function (snap) {
        playground.value = snap.val();
      });
    }
  });
});

signOutButton.addEventListener('click', function(){
  firebase.auth().signOut().then(function(){
    header.innerText = 'Sign In With Google To See The Magic';
    playground.value = 'You need to sign in to see the playground';
  })
})

var playground = document.getElementById('playground');
var playgroundRef = firebase.database().ref().child('playground');

playground.addEventListener('keyup', function(){
  playgroundRef.set(playground.value);
});