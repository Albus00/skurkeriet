import React from 'react'

type Props = {
  id: string
  columns: string
  name: string
  changeDetails: Function
}



const Character = (props: Props) => {
  // Convert linebreak in json to linebreak in the HTML by splitting in into multiple <p> elements
  const name = props.name;
  const splitName = name.split('\n').map(str => <h3 className='text-5xl self-center' key={str}>{str}</h3>);
  const imageSrc = "/images/characters/" + props.id + ".jpg";


  return (
    <div
      className={
        "relative px-2 mb-32 hover:cursor-pointer"}
      style={{ width: props.columns == "2" ? '50%' : '33.33333%' }} // Set width of character card (tailwind class 1/2 and 1/3 was not working for some reason...)
      onClick={() => { props.changeDetails(props.id) }}           // Change the character details in the sliding box on the home page
    >
      {/* Set character image with sent id */}
      < div
        className='relative w-full h-thirdWidth bg-cover bg-center character-shadow ease-linear duration-300
        hover:scale-[1.02] hover:opacity-75'
        style={{
          backgroundImage: "url(" + imageSrc + ")", // Set character image as background
        }}
      >
      </div >
      <div className='justify-center flex-col pt-5'>
        {splitName}
      </div>
    </div >
  )
};

export default Character