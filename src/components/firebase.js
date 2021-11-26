// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEPdQz1kYW9wb01M6rgNaEkUjt_VFWh90",
  authDomain: "task-app-1b9a9.firebaseapp.com",
  projectId: "task-app-1b9a9",
  storageBucket: "task-app-1b9a9.appspot.com",
  messagingSenderId: "41921926271",
  appId: "1:41921926271:web:325af1be87c69c256b9b4a",
  measurementId: "G-X2HMY79CV5"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
  const db=getFirestore(firebaseApp)
  const auth = getAuth(firebaseApp);
//   const provider=new firebase.auth.GoogleAuthProvider()
  export {auth}
  export default db