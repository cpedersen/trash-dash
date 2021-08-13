import { useState } from 'react'
import { createUser } from '@/api/authApi'
import { createUserInDb } from '@/api/userApi'

type RegisterProps = {}

const Register = (props: RegisterProps) => {
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

  const prepareCreateUserInDbPayload = (user: firebase.default.User) => {
    const { uid: id, displayName, email, photoURL } = user
    return {
      id,
      displayName,
      email,
      emailVerified: false,
      photoURL,
    }
  }

  const onRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log('on register', e)
    e.preventDefault()
    try {
      const { email, password } = form
      const { user } = await createUser(email, password)
      if (!user) throw new Error('There was a problem')
      /* @ts-ignore */
      const result = await createUserInDb(prepareCreateUserInDbPayload(user))
      console.log({ user, result })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="w-full max-w-xs mx-auto container">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={onRegister}
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
            Register
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

export default Register
