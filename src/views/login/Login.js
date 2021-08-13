/*const Login = (props) => {
  return <div>Login</div>
}
*/

import { loginUser } from '@/api/authApi'
import { fetchUserDetails } from '@/api/userApi'
import { useState } from 'react'

const Login = (props) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const onChange = (e) => {
    setForm((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }))
  }

  const onLogin = async (e) => {
    console.log('on login', e)
    e.preventDefault()
    try {
      const { email, password } = form

      // TODO - how get the user?
      const { user } = await loginUser(email, password)
      //const result = await createUserInDb(prepareCreateUserInDbPayload(user))
      const { uid } = user
      const userData = await fetchUserDetails(uid)
      console.log({ user, userData })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="w-full max-w-xs mx-auto container">
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
