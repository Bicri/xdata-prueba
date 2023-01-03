import Image from "next/image"
import LoginLogo from "/img/logoD.svg";

const HeadLogin = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center " >
        <Image src={ LoginLogo } alt="Logo" className="mb-3" />
        <span className="text-gray-400 font-semibold mb-5" >Dashboard Kit</span>

        <h1 className="text-black font-bold text-xl mb-2 text-center" >Log In to Dashboard Kit</h1>
        <span className="text-gray-400 font-semibold mb-5 text-center text-sm" >Enter your email and password below</span>
    </div>
  )
}

export default HeadLogin