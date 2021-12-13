import { auth } from './api'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'

export const createUser = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password)
}

export const loginUser = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password)
}
