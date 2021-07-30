import { firestore } from './api'

export const createUserInDb = (user) => {
  firestore.collection('users').doc(user.id).set(user)
}
