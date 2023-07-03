'use client'

import Marquee from "react-fast-marquee";

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className="text-grey font-cascadia pb-5">
      <p className="text-center mb-2">&copy;Skurkeriet</p>
      <Marquee>
        01110011 01101011 01110101 01110010 01101011 01100101 01110010 01101001 01100101 01110100 00100000 01110110 01101001 01101110 01101110 01100101 01110010 00100000 01100001 01101100 01101100 01110100 01101001 01100100 00101100 00100000 01101110 01101111 01101100 01101100 01100001 01101110
      </Marquee>
    </div>
  )
}

export default Footer