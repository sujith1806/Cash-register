  import firebase from 'firebase/app';
  import "firebase/firestore";
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  let fireapiKey;
  let fireappId;
  if(process.env.NODE_ENV !== 'production'){
    fireapiKey = process.env.REACT_APP_FIREBASE_API_KEY;
    fireappId = process.env.REACT_APP_FIREBASE_APP_ID;
  }else{
    fireapiKey = process.env.FIREBASE_API_KEY;
    fireappId = process.env.FIREBASE_APP_ID;
  }
  var firebaseConfig = {
    apiKey: fireapiKey,
    authDomain: "cash-register-app-bef6a.firebaseapp.com",
    projectId: "cash-register-app-bef6a",
    storageBucket: "cash-register-app-bef6a.appspot.com",
    messagingSenderId: "576794845841",
    appId: fireappId,
    measurementId: "G-7DQMJMK5ZH"
  };
  // Initialize Firebase
  var fire = firebase.initializeApp(firebaseConfig);

  export default fire;
