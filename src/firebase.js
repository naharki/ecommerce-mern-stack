import firebase from 'firebase/app';
import 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAE7IB7FnlCgkqXX9HVDkFow6tyaiBQOM8",
  authDomain: "midamtech-466bb.firebaseapp.com",
  projectId: "midamtech-466bb",
  storageBucket: "midamtech-466bb.appspot.com",
  messagingSenderId: "553941911827",
  appId: "1:553941911827:web:764fdae52ab327deedf2e6",
  measurementId: "G-J30P1YJ4W0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
