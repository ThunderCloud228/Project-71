import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyC6Df08Rjaec65Gg26aM3TfMoGbiL_w84E",
  authDomain: "complaint-forum-3e1d7.firebaseapp.com",
  projectId: "complaint-forum-3e1d7",
  storageBucket: "complaint-forum-3e1d7.appspot.com",
  messagingSenderId: "796513449430",
  appId: "1:796513449430:web:b239dd2d19bb84bbff2077"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

