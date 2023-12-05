import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

export const firebaseConfig = {
  apiKey: 'AIzaSyDGO0rjrlH3ODwReG3ndd3wDz7_opqGYBI',
  authDomain: 'cystore-cc668.firebaseapp.com',
  projectId: 'cystore-cc668',
  storageBucket: 'cystore-cc668.appspot.com',
  messagingSenderId: '558228880917',
  appId: '1:558228880917:web:0bf27f379d317a471b181c',
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
