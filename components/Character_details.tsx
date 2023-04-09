import React from 'react'
import Image from 'next/image'

type Props = {
  id: string
  name: string
  story: string
}

const Character_details = (props: Props) => {
  return (
    <div className='bg-black'>
      {/* <Image src={} /> */}
      {props.name}<br />
      {props.story}
    </div>
  )
}

export default Character_details