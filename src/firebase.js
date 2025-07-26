import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/firestore';
// import firebase from 'firebase/app';
import 'firebase/auth';
import {initializeApp} from "firebase/app";
import 'firebase/database';
// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJC3tzFA-_LUHp2H8XOGfpw_djeQr6ljY",
  authDomain: "apnadabba-08.firebaseapp.com",
  projectId: "apnadabba-08",
  storageBucket: "apnadabba-08.appspot.com",
  messagingSenderId: "28107738684",
  appId: "1:28107738684:web:881827d764bc4b33fbfd39",
  measurementId: "G-BX61KC43PG",
  databaseURL:"https://apnadabba-08-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

const Firebase = firebase.initializeApp(firebaseConfig);
export const app = initializeApp(firebaseConfig);
export default firebase;


//   const auth = getAuth(app);

//   function App(){
//     const signup=()=>{ 
//     }
//   }

  
//     const user = FireBase.auth().currentUser;

// if (user) {
//   // User is signed in, proceed with the operation
//   const saveToFirebase = FireBase.firestore();
//     saveToFirebase.collection("login").add({
//       name: formData.name,
//       gender:formData.gender,
//       email:formData.email,
//       contact:formData.phoneNumber,
//       dob:formData.dob,
//       pwd:formData.password,
//     });
// } else {
//   // User is not signed in, prompt them to sign in
//  }
// };
// const db = getDatabase(app);
// const signup = () => {
// //  const auth = firebase.auth();
//   //const saveToFirebase = firebase.database().ref('/Signup'); // Replace with your actual path

//   auth
//     .createUserWithEmailAndPassword(formData.email, formData.password)
//     .then((userCredential) => {
//       const user = userCredential.user;

//       saveToFirebase.child(user.uid).set({
//         name: formData.name,
//         gender: formData.gender,
//         email: formData.email,
//         contact: formData.phoneNumber,
//         dob: formData.dob,
//         pwd: formData.password,
//       });
//     
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.error(`${errorCode}: ${errorMessage}`);
//     });
// };