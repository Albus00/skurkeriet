"use client"

import { type } from "os";
import Typewriter from "typewriter-effect";

export default function Page() {

  return (
    <main>
      {/* <video className='h-full fixed top-0 left-0' autoPlay loop muted>
        <source src={'/sample3.mp4'} type='video/mp4' />
      </video> */}
      <div className="font-indivisible w-full px-[18%] pt-[12%] text-center">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(2000)
              .typeString("Godkväll barn")
              .pauseFor(300)
              .typeString(".")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Hoppas barn är taggad.")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Har barn på sig sin stass?")
              .pauseFor(2000)
              .typeString(" Hela?")
              .pauseFor(3000)
              .typeString(" Säker?")
              .pauseFor(1500)
              .deleteAll()
              .typeString("Till och med hatten?")
              .pauseFor(3500)
              .typeString(" Skoja")
              .pauseFor(800)
              .typeString(", barn har ju ingen hatt.")
              .pauseFor(800)
              .typeString(" Det hade ju varit underligt.")
              .pauseFor(2000)
              .deleteAll()
              .pauseFor(2000)
              .typeString("Eller")
              .pauseFor(500)
              .typeString("?")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Hursomhelst så borde barn se till att ta en bild på sig själv i stass.")
              .pauseFor(1500)
              .typeString(" Utan hatt.")
              .pauseFor(2000)
              .deleteAll()
              .typeString("Kanske borde barn sen skicka denna bild i ")
              .pauseFor(1000)
              .typeString('"Bästa föräldrarna my guy".')
              .pauseFor(2000)
              .deleteAll()
              .typeString("Det hade föräldrar uppskattat.")
              .pauseFor(1000)
              .deleteAll()
              .pauseFor(5000)
              .typeString("Är barn kvar?")
              .pauseFor(2000)
              .deleteAll()
              .typeString("Barn borde verkligen se till att ta dendär bilden nu.")
              .pauseFor(2000)
              .deleteAll()
              .typeString("Föräldrar kommer bli så ledsna annars")
              .pauseFor(2500)
              .typeString(" och det vill barn väl inte?")
              .pauseFor(2000)
              .typeString(" Eller?")
              .pauseFor(2000)
              .deleteAll()
              .typeString("Inte?")
              .pauseFor(2000)
              .typeString(" Okej.")
              .pauseFor(1000)
              .deleteAll()
              .typeString(" Då ska barn få höra en saga istället.")
              .pauseFor(2000)
              .deleteAll()
              .typeString("Det var en gång en liten pojke.")
              .pauseFor(2000)
              .typeString(" Han hette ")
              .pauseFor(1000)
              .typeString("Barn.")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Barn var en väldigt fin pojke.")
              .pauseFor(2000)
              .typeString(" Han var så fin att alla tyckte om honom.")
              .pauseFor(2000)
              .typeString(" Alla utom en.")
              .pauseFor(2000)
              .deleteAll()
              .typeString("Den där ena var en liten flicka.")
              .pauseFor(2000)
              .typeString(" Hon hette ")
              .pauseFor(1000)
              .typeString("Barn.")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Barn var en väldigt fin flicka.")
              .pauseFor(2000)
              .typeString(" Hon var så fin att alla tyckte om henne.")
              .pauseFor(2000)
              .typeString(" Alla utom en.")
              .pauseFor(2000)
              .deleteAll()
              .typeString("Den där ena var en liten pojke.")
              .pauseFor(2000)
              .typeString(" Han hette ")
              .pauseFor(1000)
              .typeString("Barn.")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Barn var en väldigt fin pojke.")
              .pauseFor(2000)
              .typeString(" Han var så fin att alla tyckte om honom.")
              .pauseFor(2000)
              .typeString(" Alla utom en.")
              .pauseFor(2000)
              .deleteAll()
              .typeString("Den där ena var en liten flicka.")
              .pauseFor(2000)
              .typeString(" Hon hette ")
              .pauseFor(1000)
              .typeString("Barn.")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Barn var en väldigt fin flicka.")
              .pauseFor(2000)
              .typeString(" Hon var så fin att alla tyckte om henne.")
              .pauseFor(2000)
              .typeString(" Alla utom en")
              .pauseFor(2000)
              .typeString(" och det var Joel.")
              .pauseFor(2000)
              .deleteAll()
              .typeString("Snipp snapp snut")
              .pauseFor(2000)
              .deleteAll()
              .typeString("Så var sagan slut.")
              .pauseFor(5000)
              .deleteAll()
              .start();
          }}
        />
      </div>
    </main >
  )
}
