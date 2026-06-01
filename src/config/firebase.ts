// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWp0etwXV8xyiGdbtZpA_0gPqL2rzxTLA",
  authDomain: "login-e281a.firebaseapp.com",
  databaseURL: "https://login-e281a-default-rtdb.firebaseio.com",
  projectId: "login-e281a",
  storageBucket: "login-e281a.firebasestorage.app",
  messagingSenderId: "788280515665",
  appId: "1:788280515665:web:24366c4cb8239dd1152c70",
  measurementId: "G-MBE6S693NB"
};

export const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
