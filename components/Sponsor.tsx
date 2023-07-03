'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

type Props = {
  company: string
  className: string
  random: boolean
}

const Sponsor = (props: Props) => {
  // Randomize the visibility for the sponsor logo that has only paid for the "slumpad" tier
  // Because random numbers are used the client- and serverside will not match, so the number has to be placed in state and effect
  const [logoVisibility, setLogoVisibility] = useState(true);
  useEffect(() => {
    setLogoVisibility(Math.random() < 0.5);
  }, []);

  const img_src = "/images/sponsors/" + props.company.toLowerCase() + ".png";

  return !props.random || logoVisibility ? (  // Only render image if the prop is not randomized or randomized to be visible
    <div className={
      props.className +
      " relative" +
      " handheld:px-0"
    }>
      <Image
        src={img_src}
        fill
        alt={props.company}
        sizes="50vw"
        className="
          object-contain
        " />
    </div>
  ) : null
}

export default Sponsor