import React from 'react'
import Image from 'next/image'
import { url } from 'inspector'

type Props = {
  id: string
  name: string
}


const Character = (props: Props) => {

  return (
    <div
      className='relative h-thirdWidth'
    >
      {/* Set character image with sent id */}
      <div
        className='relative w-full h-5/6 bg-cover bg-center character-shadow'
        style={{
          backgroundImage: "url(" + `${("/images/characters/" + props.id + ".jpg")}` + ")",
        }}
      >
        {/* <Image
          className='object-cover object-center bottom-shadow'
          src={"/images/characters/" + props.id + ".jpg"}
          alt={props.name}
          fill
        /> */}
      </div>
      <div className='absolute bottom-0 left-0 right-0'>
        <h3 className='w-10/12 m-auto text-5xl text-center'>{props.name}</h3>
      </div>
    </div>
  )
}

export default Character