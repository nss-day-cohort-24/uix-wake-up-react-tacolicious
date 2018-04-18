import Rebase from 're-base';
import firebase from 'firebase';
const app = firebase.initializeApp({
  apiKey: "AIzaSyCXcgftU1jGkdzkt9enFIO_rtpa334ErKk",
  authDomain: "tacolicious-wake-up-app.firebaseapp.com",
  databaseURL: "https://tacolicious-wake-up-app.firebaseio.com"
});

export const rebase = Rebase.createClass(app.database());

// //add the authProvides your app needs: google, facebook, twitter, github,
export const googleProvider = new firebase.auth.GoogleAuthProvider();
