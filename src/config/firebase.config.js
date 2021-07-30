import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/firestore'
import 'firebase/functions'
import 'firebase/remote-config'

const firebaseConfig = {
  apiKey: 'AIzaSyD-DDqsDUoHsw3DqdWZlepjYsrEdcrTyl4',
  authDomain: 'trash-dash-46e41.firebaseapp.com',
  projectId: 'trash-dash-46e41',
  storageBucket: 'trash-dash-46e41.appspot.com',
  messagingSenderId: '4810960069',
  appId: '1:4810960069:web:c3939cac530cae2c4a54ac',
  measurementId: 'G-PF9NS8P1CB',
}

try {
  firebase.initializeApp(firebaseConfig)
} catch (error) {
  if (!error.message.includes('already exists')) {
    console.error(`Firebase initialization error`, error.stack)
  }
}

const auth = firebase.auth()
const firestore = firebase.firestore()
const functions = firebase.functions()
const storage = firebase.storage()

if (process.env.NODE_ENV === 'development') {
  functions.useEmulator('localhost', '5001')
}

export { firestore, functions, storage, auth, firebase }
