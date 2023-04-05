import React, { useState } from 'react'
import Image from 'next/image'
import { url } from 'inspector'

type Props = {
  id: string
  columns: string
  name: string
}


const Character = (props: Props) => {
  // Convert linebreak in json to linebreak in the HTML by splitting in into multiple <p> elements
  const name = props.name;
  const splitName = name.split('\n').map(str => <p className='text-center' key={str}>{str}</p>);

  const [details, setDetails] = useState({ id })

  const handleClick = () => {
    setDetails({ ...details, id: props.id })
  }
};

return (
  <div
    className={"relative h-thirdWidth w-1/" + props.columns}
    onClick={ }
  >
    {/* Set character image with sent id */}
    <div
      className='relative w-full h-5/6 bg-cover bg-center character-shadow'
      style={{
        backgroundImage: "url(" + `${("/images/characters/" + props.id + ".jpg")}` + ")",
      }}
    >
    </div>
    <div className='justify-center absolute bottom-0 left-0 right-0 h-36'>
      <h3 className='text-5xl self-center' id='nameId'>{splitName}</h3>
    </div>
  </div>
)
}

export default Character