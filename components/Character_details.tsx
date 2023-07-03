'use client'
import Image from "next/image";
import closeIcon from "icons/close.svg"

type Props = {
  condition: boolean
  SetCondition: Function
  id: string
  name: string
  story: string
}

const Character_details = (props: Props) => {
  let imageSrc = "/images/characters/" + props.id + ".jpg";
  const splitStory = props.story.split('\n').map(str => <p className="mb-4" key={str}>{str}</p>); // Split the story into multiple paragraphs wherever \n is used

  const handleClick = (event: any) => {
    // Makes sure the onclick function (this) is only called when clicking the parent element (above the details panel). (works on X button)
    if (event.target !== event.currentTarget) {
      return;
    }

    props.SetCondition(); // Send to parent (index.tsx) that the details panel should be closed
  }

  return (
    <div  // Parent div covering the entire screen. Makes is able to click above the details box to close it.
      className={`fixed transition-all duration-500 h-screen w-screen ${props.condition ? "bottom-0" : "-bottom-full"}`}  // makes the dig slide upp and down
      onClick={handleClick}
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
          <div className='relative'>
            <h2 className='text-center text-7xl'>{props.name}</h2>
            <Image
              priority
              width={35}
              height={35}
              src={closeIcon}
              alt="Stäng"
              className="absolute right-0 top-0 hover:cursor-pointer"
              onClick={handleClick}
            />
          </div>
          {splitStory}
        </div>
      </div>
    </div>
  )
}

export default Character_details