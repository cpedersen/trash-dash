import { firestore } from './api'

export const createUserInDb = (user) => {
  return firestore.collection('users').doc(user.id).set(user)
}

export const fetchUserDetails = async (id) => {
  const userSnap = await firestore.collection('users').doc(id).get()
  return userSnap.data()
}
