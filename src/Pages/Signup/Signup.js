import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useToken from '../../hooks/useToken';

const Signup = () => {
  const {createUser, updateUserProfile, setLoading} = useContext(AuthContext)
  const [error, setError] = useState('')
  const [createUserEmail, setCreateUserEmail] = useState('')
  const [token] = useToken(createUserEmail);
  const navigate = useNavigate()
  
  useEffect(() => {
    if(token){
      navigate('/')
    }
  }, [token])

  const handleSignup = event => {
    event.preventDefault();
    setError('')
    const form = event.target;
    const name = form.name.value;
    const role = form.select.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user)
      toast.success('User Sign Up Successfully')
      updateUserProfile(name)
      .then(() => {
        setLoading(false)
        savedUserDb(name, email, role)
      }).catch((error) => {

      })
      form.reset()
    })
    .catch((error) => {
       setError(error.message)
    });
  }

  const savedUserDb = (name, email, role) => {
    const user = {name, email, role}
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      setCreateUserEmail(email)
    })
  }
    return (
        <div className="w-full my-10 mx-auto max-w-sm p-4 md:max-w-md rounded-md shadow sm:p-8 bg-gray-900 text-gray-100">
      <h2 className="mb-3 text-3xl font-semibold text-center">
        Sign Up
      </h2>
      <form
        onSubmit={handleSignup}
        className="space-y-8 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-2">
            <label htmlFor="email" className="block text-sm">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-900 text-gray-100 focus:border-violet-400"
              required
            />
          </div>
        <div className="space-y-2">
        <label htmlFor="Path" className="block text-sm">
              Choose Your Path
            </label>
        <select name='select' required className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-900 text-gray-100 focus:border-violet-400">
          <option>Buyer</option>
          <option>Seller</option>
        </select>
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm">
              Email address
            </label>
            <input
              type="email"
              name="email"
              placeholder="example@example.com"
              className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-900 text-gray-100 focus:border-violet-400"
              required
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <Link
                rel="noopener noreferrer"
                href="#"
                className="text-xs hover:underline text-gray-400"
              >
                Forgot password?
              </Link>
            </div>
            <input
              type="password"
              name="password"
              placeholder="*****"
              className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-900 text-gray-100 focus:border-violet-400"
              required
            />
          </div>
        <input
          type="submit"
          className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900"
          value="Sign Up"
        />
      </form>
      <p className='text-red-500'>{error}</p>
      <p className="text-sm text-center text-gray-400 mt-5">
        Already have an account?
        <Link
          to={'/login'}
          className="focus:underline hover:underline text-green-300"
        >
           Log In Your Account
        </Link>
      </p>
    </div>
    );
};

export default Signup;