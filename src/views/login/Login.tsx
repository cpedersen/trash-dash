/*const Login = (props) => {
  return <div>Login</div>
}
*/

import { loginUser } from '@/api/authApi'
import { fetchUserDetails } from '@/api/userApi'
import { useState } from 'react'
import type { RootState } from '@/store'
import type { User } from '@/types'
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from '@/store/user/userSlice'
import { useNavigate } from 'react-router-dom'
import styles from './login.module.css'
type LoginProps = {}

const Login = (props: LoginProps) => {
  const userState = useSelector((state: RootState) => state.user.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  console.log('user state', userState)
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }))
  }

  const onLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log('on login', e)
    e.preventDefault()
    try {
      const { email, password } = form
      const { user } = await loginUser(email, password)
      if (!user) throw new Error('There was an unexpected problem')

      const { uid } = user
      const userData = (await fetchUserDetails(uid)) as User
      console.log({ user, userData })
      dispatch(setUser(userData))
      navigate('/', {
        replace: true,
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className={styles.login}>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={onLogin}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            name="email"
            value={form.email}
            onChange={onChange}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            name="password"
            value={form.password}
            onChange={onChange}
          />
          {/* <p className="text-xs italic">
            Please choose a password.
          </p> */}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  )
}

export default Login
