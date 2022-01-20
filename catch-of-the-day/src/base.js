import Rebase from "re-base";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyADpKD8hIzQBFdNHFOHRebKxD1frLPEN84",
  authDomain: "ris-cotd.firebaseapp.com",
  databaseURL: "https://ris-cotd-default-rtdb.firebaseio.com"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;