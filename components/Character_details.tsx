'use client'
import Image from "next/image";
import closeIcon from "icons/close.svg"
import arrowIcon from "icons/arrow.svg"
import { useRef } from "react";

type Props = {
  condition: boolean
  SetCondition: Function
  id: string
  name: string
  story: string
  isMobile: boolean
}

const Character_details = (props: Props) => {
  const divRef = useRef<HTMLInputElement>(null);
  let imageSrc = "/images/characters/" + props.id + ".jpg";
  const splitStory = props.story.split('\n').map(str => <p className="mb-4" key={str}>{str}</p>); // Split the story into multiple paragraphs wherever \n is used

  // Change text size on mobile so it fits
  let splitName = props.name.split('\n').map(str => <h4 className='self-center mobile:text-4xl' key={str}>{str}</h4>);
  if (props.name.includes("Tayla")) {
    splitName = props.name.split('\n').map(str => <h4 className='self-center mobile:text-4xl' key={str}>{str}</h4>);
  }

  const handleClick = (event: any) => {
    // Makes sure the onclick function (this) is only called when clicking the parent element (above the details panel). (works on X button)
    if (event.target !== event.currentTarget) {
      return;
    }

    props.SetCondition();                                     // Send to parent (index.tsx) that the details panel should be closed
    // Since the details page is the same component for every character (it just switches out the content) we have to scroll to the top when closing it. Inline if is used so it's not NULL
    divRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div  // Parent div covering the entire screen. Makes is able to click above the details box to close it.
      className={`fixed transition-all duration-500 h-full w-full ${props.condition ? "bottom-0" : "-bottom-full"}`}  // makes the dig slide upp and down
      onClick={handleClick}
    >
      <div className='absolute bottom-0 bg-black h-4/5 w-screen flex top-shadow py-5'>
        {/* Image */}
        {!props.isMobile ? (
          <div
            // Padding left:10px is used to match upp the image with the images in the background (which uses another shadow width)
            className='w-1/3 bg-cover bg-center large-character-shadow ml-[10px]'
            style={{
              backgroundImage: "url(" + imageSrc + ")", // Set character image as background
            }}
          />
        ) : null}

        {/* Story */}
        <div className='w-2/3 px-10 pt-10 handheld:w-full handheld:px-24 mobile:h-full mobile:pt-0 mobile:px-0'>
          {!props.isMobile ? (
            <div className='relative'>
              <h2 className='text-center text-7xl'>{props.name}</h2>
              <Image
                width={35}
                height={35}
                src={closeIcon}
                alt="Stäng"
                className="absolute right-0 top-0 hover:cursor-pointer"
                onClick={handleClick}
              />
            </div>
          ) : (
            <div className='mb-5 relative'>
              <Image
                width={40}
                height={40}
                src={arrowIcon}
                alt="Stäng"
                className="m-auto mb-8"
                onClick={handleClick}
              />
              <div className='text-center text-7xl mobile:text-4xl'>{splitName}</div>
            </div>
          )}
          <div ref={divRef} className="mobile:h-4/5 mobile:overflow-scroll mobile:px-10 mobile:pb-10">
            {splitStory}
          </div>
        </div>
      </div>
    </div >
  )
}

export default Character_details