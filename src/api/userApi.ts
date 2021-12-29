import { getDoc, setDoc } from './api'
import type { User } from '../types'

export const createUserInDb = (user: User) => {
  return setDoc(`users`, user.id)(user)
}

export const fetchUserDetails = async (id: string) => {
  const userSnap = await getDoc(`users`, id)
  return userSnap.data()
}
