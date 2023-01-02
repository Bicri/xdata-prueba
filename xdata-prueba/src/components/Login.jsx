import React from 'react'
import Image from "next/image"
import LoginLogo from "/img/logoD.svg";
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();
  return (
    <div className="w-[100vw] h-[100vh] bg-gray-700 flex justify-center items-center p-2" >
        <div className="w-[90%] max-w-[600px] lg:max-w-[380px] px-12 py-8 rounded-lg bg-white flex flex-col  items-center " >

            <div className="w-full flex flex-col justify-center items-center " >
              <Image src={ LoginLogo } alt="Logo" className="mb-3" />
              <span className="text-gray-400 font-semibold mb-5" >Dashboard Kit</span>

              <h1 className="text-black font-bold text-xl mb-2 text-center" >Log In to Dashboard Kit</h1>
              <span className="text-gray-400 font-semibold mb-5 text-center text-sm" >Enter your email and password below</span>
            </div>

            <form className="w-full">
              <span className="block text-gray-400 font-semibold mb-1 text-base" >EMAIL</span>
              <input type="text" placeholder="Email address" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6 text-base" />
              <div className="flex justify-between">
                <span className="text-gray-400 font-semibold mb-1 text-base" >PASSWORD</span>
                <a href="#" className="text-gray-400 font-semibold mb-1 text-xs self-center" >Forgot Password?</a>
              </div>
              <input type="password" placeholder="Password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6 text-base" />
              <button type="submit" className="w-full p-3 bg-blue-700 text-white font-semibold rounded-lg mb-20 sm:mb-5" 
                onClick={ (e) => {e.preventDefault(); router.push("/inicio")}} 
                >
                  Log In
                </button>
              <p className="text-gray-400 font-semibold text-center text-sm" >
                Don´t have an account? 
                <a href="#" className="text-blue-700 ml-2" >Sign up</a>
              </p>
            </form>
        </div>
    </div>
  )
}
export default Login