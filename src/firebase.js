import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCsKnXbyAWNkYkwal94FgVj25MIyAldDuk",
    authDomain: "whatsapp-mern-e35b5.firebaseapp.com",
    databaseURL: "https://whatsapp-mern-e35b5.firebaseio.com",
    projectId: "whatsapp-mern-e35b5",
    storageBucket: "whatsapp-mern-e35b5.appspot.com",
    messagingSenderId: "100310620308",
    appId: "1:100310620308:web:5b0fe325d5c35c5749fc81",
    measurementId: "G-JRVBTQD3BE"
  };

  // initialize app with firebase using the config above
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  // gets your database
  const db = firebaseApp.firestore();
  // responsible for authentication
  const auth = firebase.auth();
  // use google's auth provider
  const provider = new firebase.auth.GoogleAuthProvider();

  // explicitly export auth and provider
  export { auth, provider };
  // export db on default as we are going to use more often
  export default db;