import firebase from 'firebase/app'
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBeMXMlmU0qibCoh_adkU3wN4eyTW0bl7A",
  authDomain: "gmolle-yt-clone.firebaseapp.com",
  projectId: "gmolle-yt-clone",
  storageBucket: "gmolle-yt-clone.appspot.com",
  messagingSenderId: "193427331522",
  appId: "1:193427331522:web:ea3cb5a36e72a77dedde5b"
};

firebase.initializeApp(firebaseConfig)

export default firebase.auth()