import { useRouter } from "next/router";
import HeadLogin from "./HeadLogin";
import { useForm } from "../hooks/useForm";

const Login = () => {
  const router = useRouter();
  const { formState, onInputChange } = useForm({
    email: "",
    password: ""
  });

  const onSubmit = ( e ) => {
    e.preventDefault();
    console.log(formState);
    router.push("/inicio")
  }

  return (
    <div className="w-[100vw] h-[100vh] bg-gray-700 flex justify-center items-center p-2" >
        <div className="w-[90%] max-w-[600px] lg:max-w-[380px] px-12 py-8 rounded-lg bg-white flex flex-col  items-center " >

            <HeadLogin />

            <form className="w-full" onSubmit={onSubmit}>
              <span className="block text-gray-400 font-semibold mb-1 text-base" >EMAIL</span>
              <input type="text" name="email" onChange={onInputChange} placeholder="Email address" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6 text-base" />
              <div className="flex justify-between">
                <span className="text-gray-400 font-semibold mb-1 text-base" >PASSWORD</span>
                <a href="#" className="text-gray-400 font-semibold mb-1 text-xs self-center" >Forgot Password?</a>
              </div>
              <input type="password" name="password" onChange={onInputChange} placeholder="Password" autoComplete="off" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6 text-base" />
              <button type="submit" className="w-full p-3 bg-blue-700 text-white font-semibold rounded-lg mb-20 sm:mb-5"  >
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