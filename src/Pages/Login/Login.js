import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useToken from "../../hooks/useToken";

const Login = () => {
    const {loginUser, loginWithGoogle} = useContext(AuthContext)
    const [error, setError] = useState('')
    const [loginUserEmail, setLoginUserEmail] = useState('')
  const [token] = useToken(loginUserEmail);
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/'

      if(token) {
        navigate(from, {replace: true})
      }

    const handleLogin = event => {
        event.preventDefault()
        setError('')
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
            toast.success('LogIn Successfully')
            setLoginUserEmail(email)
            form.reset()
          })
          .catch((error) => {
            setError(error.message);
          });
    }

    const handleGooglelogin = () => {
        loginWithGoogle()
        .then((result) => {
            const user = result.user;
            console.log(user)
            toast.success('LogIn Successfully')
            navigate(from, {replace: true})
          }).catch((error) => {
            // Handle Errors here.
             setError(error.message);
          });
    }
  return (
    <div className="w-full my-10 mx-auto max-w-sm p-4 md:max-w-md rounded-md shadow sm:p-8 bg-gray-900 text-gray-100">
      <h2 className="mb-3 text-3xl font-semibold text-center">
        Log In
      </h2>
      <div className="my-6 space-y-4">
        <button
          onClick={handleGooglelogin}
          aria-label="Login with Google"
          type="button"
          className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-400 focus:ring-violet-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-current"
          >
            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
          </svg>
          <p>Login with Google</p>
        </button>
        
      </div>
      <div className="flex items-center w-full my-4">
        <hr className="w-full text-gray-400" />
        <p className="px-3 text-gray-400">OR</p>
        <hr className="w-full text-gray-400" />
      </div>
      <form
      onSubmit={handleLogin}
        className="space-y-8 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm">
              Email address
            </label>
            <input
              type="email"
              name="email"
              placeholder="example@example.com"
              className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-900 text-gray-100 focus:border-violet-400"
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
            />
          </div>
        </div>
        <input
          type="submit"
          className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900"
          value="Log In"
        />
      </form>
      <p className="text-red-500">{error}</p>
      <p className="text-sm text-center text-gray-400 mt-5">
        Don't have account?
        <Link
          to='/signup'
          className="focus:underline hover:underline text-green-300"
        >
           Sign up here
        </Link>
      </p>
    </div>
  );
};

export default Login;
