import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyD9NYMQLflIAFVXGCyn6VBVeTtcIEUpC-c",
  authDomain: "my-crazy-blog.firebaseapp.com",
  projectId: "my-crazy-blog",
  storageBucket: "my-crazy-blog.appspot.com",
  messagingSenderId: "921950997059",
  appId: "1:921950997059:web:499a16eed28df0445362f6",
  measurementId: "G-C6N1W4CY73"
};

firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()
export const ts = firebase.firestore.FieldValue.serverTimestamp();
export const auth = firebase.auth();

