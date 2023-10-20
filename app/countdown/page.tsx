"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image';

export default function Page() {
  const countDownDate = new Date("Oct 21 2023 00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({ d: "0", h: "00", m: "00", s: "00" })

  useEffect(() => {

    // Call once when the page loads in
    getCountdown();

    // Update countdown every second
    const timer = setInterval(() => {
      // When it reaches 0, clear the interval
      if (getCountdown() < 0) {
        clearInterval(timer);
      }

    }, 1000);
  }, [])

  function getCountdown() {
    // Get current time
    const now = new Date().getTime();

    // Get the distance between the current time and the countdown goal
    const distance = countDownDate - now;

    // Make sure the timer does not go below 0
    if (distance < 0) {
      setTimeLeft({ d: "0", h: "00", m: "00", s: "00" });
      return distance;
    }


    // Calculate all the different variables
    let days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString();
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString();
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString();
    let seconds = Math.floor((distance % (1000 * 60)) / 1000).toString();

    // Make sure single digits are preceded by a 0, eg. 1 => 01
    if (hours.length < 2) {
      hours = "0" + hours;
    }
    if (minutes.length < 2) {
      minutes = "0" + minutes;
    }
    if (seconds.length < 2) {
      seconds = "0" + seconds;
    }

    // Call state to set the countdown variables
    setTimeLeft({ d: days, h: hours, m: minutes, s: seconds });

    // Return distance if needed
    return distance;
  }

  return (
    <main className='h-4/5'>
      <div className='m-auto mt-10 text-center pt-2/5 font-modestoExpanded text-6xl tracking-[0.05em] text-yellow'>
        <div className='text-5xl'>
          {timeLeft.d == "1" ? (timeLeft.d + " DAG") :
            timeLeft.d == "0" ? "" :
              (timeLeft.d + " DAGAR")
          }
        </div>
        <div className='text-8xl mobile:text-7xl'>
          {timeLeft.h + "t " + timeLeft.m + "m " + timeLeft.s + "s"}
        </div>

        <Image
          src="/images/qr.png"
          alt="QR Code"
          width="400"
          height="400"
          className='my-8 m-auto w-1/5 handheld:w-1/2 handheld:mb-0'
        />

        <div className='text-5xl handheld:hidden'>
          BLI EN DEL AV MÖRKRET <br />
          SÖK ELLER NOMINERA
        </div>
      </div>
    </main >
  )
}
