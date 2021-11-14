
const firebaseConfig = {
      apiKey: "AIzaSyD49qN6C-ivo5gUS9-rbwbCJQLQkaT-N1Y",
      authDomain: "classtest-33a16.firebaseapp.com",
      databaseURL: "https://classtest-33a16-default-rtdb.firebaseio.com",
      projectId: "classtest-33a16",
      storageBucket: "classtest-33a16.appspot.com",
      messagingSenderId: "1085496123529",
      appId: "1:1085496123529:web:7f638864d1c95127d6e658"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
