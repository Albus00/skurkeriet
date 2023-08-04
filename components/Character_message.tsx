import Image from "next/image";
import useMediaQuery from "@/hooks/useMediaQuery";
import closeIcon from "icons/close.svg"

type Props = {
  name: string
  message: string
  SetCondition: Function
}

const Character_message = (props: Props) => {
  let splitName = props.name.split('\n').map(str => <h4 className='self-center mobile:text-4xl' key={str}>{str}</h4>);

  const handleClick = (event: any) => {
    // Makes sure the onclick function (this) is only called when clicking the parent element (above the details panel). (works on X button)
    if (event.target !== event.currentTarget) {
      return;
    }

    props.SetCondition();   // Send to parent (index.tsx) that the details panel should be closed
  }

  const isMobile = useMediaQuery('(max-width: 750px)')

  return (
    !isMobile ? (
      <div  // Parent div covering the entire screen. Makes is able to click above the details box to close it.
        className="fixed flex justify-center items-center bottom-0 right-0 transition-all duration-500 h-full w-full"
        onClick={handleClick}
      >
        <div className='bg-[#1f1f1f] h-4/5 w-1/3 top-shadow p-5 rounded-3xl handheld:w-full handheld:mx-16 mobile:mx-3'>
          <div className='relative w-full'>
            <h2 className='text-center text-5xl mt-5'>{props.name}</h2>
            <Image
              width={25}
              height={25}
              src={closeIcon}
              alt="Stäng"
              className="absolute right-0 top-0 hover:cursor-pointer"
              onClick={handleClick}
            />
          </div>
          <div className="px-16 mobile:px-3">
            <p>{props.message}</p>
          </div>
        </div>
      </div >
    ) : (
      <div className='fixed bottom-0 right-0 bg-[#1f1f1f] h-full w-full top-shadow p-5'>
        <div className='relative w-full'>
          <Image
            width={25}
            height={25}
            src={closeIcon}
            alt="Stäng"
            className="absolute right-0 top-0 hover:cursor-pointer"
            onClick={handleClick}
          />
          <h2 className='text-center text-5xl pt-8'>{props.name}</h2>
        </div>
        <div className="px-16 mobile:px-3">
          <p>{props.message}</p>
        </div>
      </div>
    )
  )
}

export default Character_message