import { auth } from './api'

export const createUser = (email: string, password: string) => {
  return auth.createUserWithEmailAndPassword(email, password)
}

export const loginUser = (email: string, password: string) => {
  return auth.signInWithEmailAndPassword(email, password)
}
