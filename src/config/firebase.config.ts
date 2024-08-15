// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDPrv59dBfhGuuer3MR9rzT1dm25nfVDH8',
  authDomain: 'club-ecommerce-8e599.firebaseapp.com',
  projectId: 'club-ecommerce-8e599',
  storageBucket: 'club-ecommerce-8e599.appspot.com',
  messagingSenderId: '966479019714',
  appId: '1:966479019714:web:ef71a3d915fd19a6ca455b'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
