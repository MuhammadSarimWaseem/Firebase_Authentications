// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyABQK0g5Vn1oWtVQBXLzEjSI3qfPr4i0k4",
//   authDomain: "fir-authentication-30425.firebaseapp.com",
//   projectId: "fir-authentication-30425",
//   storageBucket: "fir-authentication-30425.appspot.com",
//   messagingSenderId: "649590277141",
//   appId: "1:649590277141:web:64b5f4415d15dbfd7c7a1c"
// };

// // Initialize Firebase

// const app = initializeApp(firebaseConfig);
// const auth = getAuth();


// export { app, auth };

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };