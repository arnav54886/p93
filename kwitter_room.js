
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBKagmp-3GWarKVLLypr-RT6A7uT07rsrY",
      authDomain: "kwitter-a026a.firebaseapp.com",
      projectId: "kwitter-a026a",
      storageBucket: "kwitter-a026a.appspot.com",
      messagingSenderId: "233250010185",
      appId: "1:233250010185:web:56ba8936bea3516425fb98"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
