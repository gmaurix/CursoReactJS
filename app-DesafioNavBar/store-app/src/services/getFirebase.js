import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBl5SPmijczWGu2NLBQB-ddrNtsdIjQopo",
  authDomain: "store-c1ad2.firebaseapp.com",
  projectId: "store-c1ad2",
  storageBucket: "store-c1ad2.appspot.com",
  messagingSenderId: "600995940666",
  appId: "1:600995940666:web:69e2944f3042021e49e803",
};
const app = firebase.initializeApp(firebaseConfig);

export function getFirestore() {
  return firebase.firestore(app);
}
