import { auth } from './api'

export const createUser = (email, password) => {
  return auth.createUserWithEmailAndPassword(email, password)
}

export const loginUser = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password)
}
