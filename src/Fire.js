import firebase from 'firebase';

// will use firebase emulator if set to true
export var useEmulator = true;

// Set the configuration for your app
// TODO: Replace with your project's config object
const firebaseConfig = {
  apiKey: "AIzaSyAIPkhdegLFpPnrLj-NFH4VKWWFjzD7eRA",
  authDomain: "lukeirvinecode.firebaseapp.com",
  projectId: "lukeirvinecode",
  storageBucket: "lukeirvinecode.appspot.com",
  messagingSenderId: "581106452256",
  appId: "1:581106452256:web:7f6dcb2c5580c88eea3945",
  measurementId: "G-J2345FZQB1"
};
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
// export var rtDatabase = firebase.database();
// export var fireAuth = firebase.auth();
// export var fireStorage = firebase.storage();
// export var fireFuncs = firebase.functions();
export var fireAnalytics = firebase.analytics();
if (window.location.hostname === "localhost" && useEmulator) {
    // rtDatabase.useEmulator("localhost", 8001);
    // fireAuth.useEmulator("http://localhost:9099");
    // fireStorage.useEmulator("localhost", 9199);
    // fireFuncs.useEmulator("localhost", 5001);
}
