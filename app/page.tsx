'use client'

// Login Page for preview
import Image from "next/image"
import { useRouter } from 'next/navigation'
import { useState } from "react";

export default function Page() {
  const router = useRouter();
  const [password, setPassword] = useState('');

  const handleChange = (event) => {
    setPassword(event.target.value);
  };

  function handleClick() {
    router.push('/' + password);
  }

  return (
    <div className="flex w-screen h-screen justify-center">
      <div className="w-[28rem] h-[40rem] self-center bg-gray-700 rounded-3xl pt-12 handheld:w-3/4 handheld:h-5/6 justify-center">
        <h2 className="text-red-600">&#91;TOP SECRET&#93;</h2>
        <h2 className="leading-3">For MAs eyes only</h2>
        <div className="font-modesto tracking-[0.2em] flex flex-col px-16">
          <div className="relative w-[250px] h-[250px] m-auto my-5">
            <Image
              src={"/assar.gif"}
              fill
              className="object-cover rounded-lg"
              alt="Assar<3"
            />
          </div>
          <input onChange={handleChange} value={password} className="text-black text-2xl pl-2 rounded-md mt-5" type="text" name="password" id="password_input" placeholder="Enter your password" />
          <button onClick={handleClick} className="text-2xl text-black bg-yellow rounded-xl px-12 py-3 m-auto w-1/2 mt-5 font-bold tracking-widest">LOGIN</button>
        </div>
      </div>
    </div>
  )
}