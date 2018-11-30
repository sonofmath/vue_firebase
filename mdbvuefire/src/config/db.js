import Firebase from 'firebase'
 let config = {
    apiKey: "AIzaSyAGRSQxVUCg1F3Pkor70I_KFhftyT-2mO4",
    authDomain: "test-e6695.firebaseapp.com",
    databaseURL: "https://test-e6695.firebaseio.com",
    projectId: "test-e6695",
    storageBucket: "test-e6695.appspot.com",
    messagingSenderId: "25880871388"
  };
let app = Firebase.initializeApp(config)
export const db = app.database()