import { useState } from "react";

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e)=> {
    e.preventDefault();   
    handleLogin (email, password);
    setEmail("");
    setPassword("");
  }


  return (
    <div className='bg-black flex h-screen w-screen items-center justify-center'>
      <div className='bg-transparent border-2 rounded-2xl border-emerald-600 p-12'>

        <form onSubmit={(e)=>{submitHandler(e)}} className='flex flex-col justify-center items-center'>

          <input value={email} onChange={(e)=>{setEmail(e.target.value);
          }} required className='text-xl text-white outline-none bg-black border-2 border-emerald-600 py-2 px-3 rounded-full mt-2 placeholder:text-gray-400' type="email" placeholder="Enter Your Email"></input>

          <input value={password} onChange={(e)=>{setPassword(e.target.value)}} required className='text-xl text-white outline-none bg-black border-2 border-emerald-600 py-2 px-3 rounded-full placeholder:text-gray-400 mt-5' type="password" placeholder="Enter Your Password"></input>

          <button className='text-xl text-white outline-none border-none bg-emerald-600 py-3 px-25 mt-8 mb-2 rounded-full'>Log in</button>

        </form>
      </div>
    </div>
  )
}

export default Login