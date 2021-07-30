import { auth } from './api'

export const createUser = (email, password) => {
  return auth.createUserWithEmailAndPassword(email, password)
}
