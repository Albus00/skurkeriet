import Details_button from "./Details_button"
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
  id: string
  columns: string
  name: string
  changeDetails: Function
}



const Character = (props: Props) => {
  // Convert linebreak in json to linebreak in the HTML by splitting in into multiple <p> elements
  const name = props.name;
  const imageSrc = "/images/characters/" + props.id + ".jpg";

  // Change text size on mobile so it fits
  let splitName = name.split('\n').map(str => <h4 className='self-center' key={str}>{str}</h4>);
  if (name.includes("Tayla")) {
    splitName = name.split('\n').map(str => <h4 className='self-center mobile:text-4xl' key={str}>{str}</h4>);
  }

  const isMobile = useMediaQuery('(max-width: 750px)')
  const isLaptop = useMediaQuery('(max-width: 1400px)')

  function handleClick(type: string) {
    // Dont trigger the div OnClick when on mobile. Should only work when pressing the button on mobile
    if ((isMobile && type === 'button') || !isMobile) {
      props.changeDetails(props.id)
    }
  }


  return (
    <div
      // Handles the grid of characters for different devices
      className={
        "relative mb-32 hover:cursor-pointer " + (isLaptop || props.columns == "2" ? 'w-1/2' : 'w-1/3') + ((!isLaptop && props.columns == "2") ? ' px-[8.25vw]' : ' px-2') +
        " mobile:w-full mobile:px-0 mobile:mb-0 mobile:h-screen"}
      onClick={() => { handleClick("area") }}           // Change the character details in the sliding box on the home page
    >
      {/* Set character image with sent id */}
      <div
        className='relative w-full bg-cover bg-center character-shadow ease-linear duration-300 aspect-square
        desktop:hover:scale-[1.02] desktop:hover:opacity-75 
        mobile:h-4/6 mobile:character-shadow-mobile'
        style={{
          backgroundImage: "url(" + imageSrc + ")", // Set character image as background
        }}
      >
      </div >
      <div className='justify-center flex-col pt-5 handheld:pt-0'>
        {splitName}
        <Details_button handleClick={handleClick} />
      </div>
    </div>
  )
};

export default Character