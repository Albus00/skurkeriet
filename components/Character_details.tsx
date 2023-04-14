import { useScrollBlock } from '@/functions/useScrollBlock'
import React from 'react'

type Props = {
  condition: boolean
  SetCondition: Function
  id: string
  name: string
  story: string
}

const Character_details = (props: Props) => {
  let imageSrc = "/images/characters/" + props.id + ".jpg";
  const [allowScroll] = useScrollBlock();

  const handleBackgroundClick = (event: any) => {
    // Makes sure the onclick function (this) is only called when clicking the parent element (above the details box).
    if (event.target !== event.currentTarget) {
      return;
    }

    allowScroll();
    props.SetCondition();
  }

  return (
    // Only render if condition is met
    props.condition ? (
      <div  // Parent div covering the entire screen. Makes is able to click above the details box to close it.
        className='fixed bottom-0 transition-all duration-500 h-screen w-screen'
        onClick={handleBackgroundClick}
      >
        <div className='absolute bottom-0 bg-black h-4/5 w-screen flex top-shadow py-5'>
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
      </div>
    ) :
      (<div className='fixed -bottom-full' />) // Renders a empty div below the bottom of the page, to set up for the animation effect
  )
}

export default Character_details