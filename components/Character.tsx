import React from 'react'

type Props = {
  id: string
  name: string
}

const Character = (props: Props) => {
  return (
    <div
      // Set background to character image with sent id
      style={{ backgroundImage: `url(${"/images/characters/" + props.id + ".jpg"})` }}
      className='shadow-inner h-96'
    >
      <h3>{props.name}</h3>
    </div>
  )
}

export default Character