import React from 'react'

type Props = {
  condition: boolean
  id: string
  name: string
  story: string
}

const Character_details = (props: Props) => {
  let imageSrc = "/images/characters/" + props.id + ".jpg";

  return (
    // Only render if condition is met
    props.condition ? (
      <div className='bg-black fixed bottom-0 left-0 h-4/5 w-screen flex top-shadow py-5'>
        <div
          // Padding left:10px is used to match upp the image with the images in the background (which uses another shadow width)
          className='w-1/3 bg-cover bg-center large-character-shadow ml-[10px]'
          style={{
            backgroundImage: "url(" + imageSrc + ")", // Set character image as background
          }}
        />
        <div className='w-2/3 px-10 pt-10'>
          <h2 className='text-center text-7xl'>{props.name}</h2>
          {props.story}
        </div>
      </div>
    ) : (<div />)
  )
}

export default Character_details