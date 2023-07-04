import React from 'react'

type Props = {
  handleClick: Function
}

const Details_button = (props: Props) => {
  return (
    <button
      className='hidden mobile:block text-black bg-yellow rounded-3xl px-12 py-3 m-auto mt-10 font-modesto font-bold tracking-widest text-4xl '
      onClick={() => { props.handleClick("button") }}>
      SE MER
    </button>
  )
}

export default Details_button