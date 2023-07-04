import React from 'react'
import Image from 'next/image';

type Props = {
  company: string
  link: string
}

const Socials_image = (props: Props) => {
  let companyAlt = props.company.charAt(0).toUpperCase() + props.company.slice(1);

  return (
    <a href={props.link}>
      <Image
        src={"/images/social/" + props.company + ".png"}
        alt={companyAlt + " logo"}
        width="150"
        height="150"
        className='mx-10 ease-linear duration-300
        hover:cursor-pointer hover:shadow-xl hover:scale-105 hover:opacity-80
        mobile:w-20 mobile:mx-4'
      />
    </a>
  )
}

export default Socials_image