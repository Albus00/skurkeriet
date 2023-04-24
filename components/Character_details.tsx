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
  const splitStory = props.story.split('\n').map(str => <p className="mb-4" key={str}>{str}</p>); // Split the story into multiple paragraphs wherever \n is used

  const handleBackgroundClick = (event: any) => {
    // Makes sure the onclick function (this) is only called when clicking the parent element (above the details panel).
    if (event.target !== event.currentTarget) {
      return;
    }

    props.SetCondition(); // Send to parent (index.tsx) that the details panel should be closed
  }

  return (
    // Only render if condition is met
    <div  // Parent div covering the entire screen. Makes is able to click above the details box to close it.
      className={`fixed transition-all duration-500 h-screen w-screen ${props.condition ? "bottom-0" : "-bottom-full"}`}  // makes the dig slide upp and down
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
          {splitStory}
        </div>
      </div>
    </div>
  )
}
//TODO: Add X button to close the panel

export default Character_details