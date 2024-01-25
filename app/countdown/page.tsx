"use client"

import Vk_typewriter from '@/components/Vk_typewriter';
import React, { useState, useEffect } from 'react'


export default function Page() {
  const countDownDate = new Date("Jan 27 2024 00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({ d: "0", h: "00", m: "00", s: "00" })
  const [deadline, setDeadline] = useState(false);

  useEffect(() => {

    // Call once when the page loads in
    getCountdown();

    // Update countdown every second
    const timer = setInterval(() => {
      // Check for when timer reaches 0
      let countdown = getCountdown();
      if (countdown < 0) {
        // Dont let the timer go below 0
        setTimeLeft({ d: "0", h: "00", m: "00", s: "00" });

        // Remove numbers for dramatic effect, until 9 seconds after deadline, then show the typewriter
        if (countdown < -9000) {
          setDeadline(true);
          clearInterval(timer);
        }
        else if (countdown < -6000) {
          setTimeLeft({ d: "0", h: "00", m: "", s: "" });
        }
        else if (countdown < -3000) {
          setTimeLeft({ d: "0", h: "00", m: "00", s: "" });
        }
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
    <main className='h-full'>
      {
        !deadline ? (
          <div className='m-auto mt-10 text-center pt-2/5 font-modestoExpanded text-6xl tracking-[0.05em] text-yellow'>
            <div className='text-5xl'>
              {timeLeft.d == "1" ? (timeLeft.d + " DAG") :
                timeLeft.d == "0" ? "" :
                  (timeLeft.d + " DAGAR")
              }
            </div>
            <div className='text-8xl mobile:hidden'>
              {timeLeft.h + "t " + timeLeft.m + "m " + timeLeft.s + "s"}
            </div>
            <div className="h-screen text-[50vw] hidden mobile:block">
              <div className=''>
                {timeLeft.h}
              </div>
              <div className='countdown-text'>
                {timeLeft.m}
              </div>
              <div className='countdown-text'>
                {timeLeft.s}
              </div>
            </div>
          </div>
        ) : (
          <Vk_typewriter />
        )
      }

    </main >
  )
}
