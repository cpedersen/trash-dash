import { auth } from '@/api/api'
import { fetchUserDetails } from '@/api/userApi'
import { User } from '@/types'
import { useDispatch } from 'react-redux'
import { setUser } from '@/store/user/userSlice'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
type WithUserAuthProps = {
  children: React.ReactNode
}

console.log(auth)
export const WithUserAuth = (props: WithUserAuthProps) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      console.log('user?', user)
      if (!user) {
        dispatch(setUser(null))
        navigate('/login')
        return
      }
      const { email, displayName, emailVerified, uid: id } = user
      const userData = (await fetchUserDetails(id)) as User
      dispatch(
        setUser({
          ...userData,
          id,
          email: email || '',
          displayName: displayName || '',
          emailVerified,
        })
      )
      navigate('/')
    })
  }, [])

  return (
    <div>
      {props.children}
      {/* <button onClick={() => auth.signOut()}>Logout</button> */}
    </div>
  )
}
