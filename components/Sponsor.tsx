'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

type Props = {
  company1: string
  company2: string
  className: string
}

const Sponsor = (props: Props) => {
  // Because random numbers are used the client- and serverside will not match, so the number has to be placed in state and effect
  const [useCompany2, setUseCompany2] = useState(true);
  useEffect(() => {
    setUseCompany2(Math.random() < 0.5);
  }, []);

  let company = props.company1;

  // If company2 is used (not blank), the component should randomize visibility between company1 and company2 (set earlier because react hook need to be outside if-statements)
  if (props.company2 != "" && useCompany2) {
    company = props.company2;
  }


  const img_src = "/images/sponsors/" + company.toLowerCase() + ".png";

  return (
    <div className={
      props.className +
      " relative" +
      " handheld:px-0"
    }>
      <Image
        src={img_src}
        fill
        alt={company}
        sizes="50vw"
        className="
          object-contain
        " />
    </div>
  )
}

export default Sponsor