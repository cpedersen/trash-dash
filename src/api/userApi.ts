import { firestore } from './api'
import type { User } from '../types'

export const createUserInDb = (user: User) => {
  return firestore.collection('users').doc(user.id).set(user)
}

export const fetchUserDetails = async (id: string) => {
  const userSnap = await firestore.collection('users').doc(id).get()
  return userSnap.data()
}
