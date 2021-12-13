import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection as _collection,
  doc as _doc,
  getDocs as _getDocs,
  getDoc as _getDoc,
  addDoc as _addDoc,
  updateDoc as _updateDoc,
  deleteDoc as _deleteDoc,
  runTransaction as _runTransaction,
  writeBatch as _writeBatch,
  setDoc as _setDoc,
  query,
  QueryConstraint,
  Transaction,
} from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyD-DDqsDUoHsw3DqdWZlepjYsrEdcrTyl4',
  authDomain: 'trash-dash-46e41.firebaseapp.com',
  projectId: 'trash-dash-46e41',
  storageBucket: 'trash-dash-46e41.appspot.com',
  messagingSenderId: '4810960069',
  appId: '1:4810960069:web:c3939cac530cae2c4a54ac',
  measurementId: 'G-PF9NS8P1CB',
}

const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)
const functions = getFunctions(app)
const auth = getAuth(app)
const storage = getStorage(app)

export { firestore, functions, auth, storage }

try {
  initializeApp(firebaseConfig)
} catch (error: unknown) {
  if (error instanceof Error && !error.message.includes('already exists')) {
    console.error(`Firebase initialization error`, error.stack)
  }
}

export const collection = (path: string) => {
  return _collection(firestore, path)
}

export const doc = (path: string, ...pathSegments: string[]) => {
  return _doc(collection(path), ...pathSegments)
}

export const getDocs = (
  path: string,
  ...queryConstraints: QueryConstraint[]
) => {
  return _getDocs(query(collection(path), ...queryConstraints))
}

export const getDoc = (path: string, ...pathSegments: string[]) => {
  return _getDoc(doc(path, ...pathSegments))
}

export const addDoc = <DocumentData>(path: string, data: DocumentData) => {
  return _addDoc(collection(path), data)
}

export const setDoc = <DocumentData>(path: string, data: DocumentData) => {
  return _setDoc(doc(path), data)
}

export const updateDoc = <DocumentData>(path: string, data: DocumentData) => {
  return _updateDoc(doc(path), data)
}

export const deleteDoc = (path: string) => {
  return _deleteDoc(doc(path))
}

export const runTransaction = <T>(
  transaction: (transaction: Transaction) => Promise<T>
) => _runTransaction(firestore, transaction)

export const startBatch = () => _writeBatch(firestore)

// const auth = firebase.auth()
// const firestore = firebase.firestore()
// const functions = firebase.functions()
// const storage = firebase.storage()

if (process.env.NODE_ENV === 'development') {
  connectFunctionsEmulator(functions, 'localhost', 5001)
}
