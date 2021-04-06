import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDImN5B56e9fGCDy7cL4_PLw48AMBNFyjs",
  authDomain: "my-users-aa933.firebaseapp.com",
  databaseURL: "https://my-users-aa933-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "my-users-aa933",
  storageBucket: "my-users-aa933.appspot.com",
  messagingSenderId: "721378059380",
  appId: "1:721378059380:web:f65c940e77bab244a55d21"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;

export const auth = firebase.auth();