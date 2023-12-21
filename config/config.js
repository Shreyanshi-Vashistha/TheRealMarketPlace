// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBrBfoHpF3C4zEqZw1kAM0FgA1mSCSHUKw",
  authDomain: "therealmp-2fdc9.firebaseapp.com",
  projectId: "therealmp-2fdc9",
  storageBucket: "therealmp-2fdc9.appspot.com",
  messagingSenderId: "446799344777",
  appId: "1:446799344777:web:d28fa7affaa7448bee8258",
  measurementId: "G-C1HG4Y027H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage),
// });

export const auth = getAuth(app);

const analytics = getAnalytics(app);
