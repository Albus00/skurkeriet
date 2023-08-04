'use client'

import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { useScrollBlock } from '@/hooks/useScrollBlock';
import { messages } from '@/data/character_messages'
import Character_message from "./Character_message";

const Card_passwords = () => {
  const [character, SetCharacter] = useState({ name: 'null', password: 'null', message: 'null' })   // Set character message placeholder
  const [password, setPassword] = useState('');
  const [wrongPassword, setWrongPassword] = useState(false);
  const [webPassword, setWebPassword] = useState(false);
  const [answer, setAnswer] = useState("");

  // Import the scroll block functions
  const [blockScroll, allowScroll] = useScrollBlock();

  // Call the submit function when pressing enter on keyboard
  useEffect(() => {
    const listener = (event: { code: string; preventDefault: () => void; }) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        handleClick();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  })

  const handleChange = (event: any) => {
    setPassword(event.target.value);
  };

  function handleClick() {
    // Look for password in character_messages
    let characterSearch = messages.find(messages => messages.password === password);

    // If user has entered special password don't check the password
    if (webPassword && answer === "") {
      setAnswer(password);
      characterSearch = messages.find(messages => messages.name.includes("Doktor"));
    }

    // No character found - password is wrong
    if (characterSearch == undefined) {
      setWebPassword(false);
      setWrongPassword(true);
      return;
    }

    // Check if password is connected to specific character
    if (characterSearch.name.includes('Doktor')) {
      setWebPassword(true)
      return;
    }
    else {
      setWebPassword(false)
      setWrongPassword(false);
      SetCharacter(characterSearch);
    }

    blockScroll();            // Block the user from scrolling the background when character details is open
  }

  async function closeMessage() {
    SetCharacter({ name: 'null', password: 'null', message: 'null' }) // Set message to placeholder and close popup
    allowScroll();                                                    // Allow scrolling when closing the details panel
  }

  return (
    <div>
      {webPassword && answer === "" ? (
        <div className="pt-3">
          <div>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(2000)
                  .typeString("Hej Nollan")
                  .pauseFor(100)
                  .typeString("...")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Välkommen")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Skriv vänligen in ditt namn...")
                  .start();
              }}
            />
          </div>
        </div>
      ) : webPassword && answer != "" ? (
        <div className="pt-3">
          <Typewriter
            onInit={(typewriter1) => {
              typewriter1
                .deleteAll()
                .pauseFor(1000)
                .typeString("...")
                .pauseFor(1000)
                .deleteAll()
                .pauseFor(1000)
                .typeString("Nollan bör vara vaksam på vem de ger sitt namn till")
                .pauseFor(1000)
                .typeString(".....")
                .pauseFor(1000)
                .deleteAll()
                .pauseFor(2000)
                .typeString("Skurkeriet tackar för Nollans bidrag")
                .pauseFor(500)
                .typeString(" och kommer höra av sig")
                .pauseFor(100)
                .typeString(".")
                .pauseFor(100)
                .typeString(".")
                .pauseFor(100)
                .typeString(".")
                .pauseFor(500)
                .typeString(" " + answer)
                .pauseFor(2000)
                .deleteAll()
                .typeString("Mörka hälsningar")
                .pauseFor(500)
                .deleteAll()
                .typeString("Doktor")
                .pauseFor(200)
                .typeString(" ink'")
                .pauseFor(200)
                .typeString(" Thom")
                .pauseFor(200)
                .typeString(" Penance")
                .pauseFor(4000)
                .deleteAll()
                .changeDelay(0.04)
                .typeString("(Skurkeriet sparar eller behandlar inte Nollans namn eller uppgifter i någon utsträckning.)")
                .pauseFor(1000)
                .changeDeleteSpeed(1)
                .deleteAll()
                .changeDelay("natural")
                .typeString("Testa skriva in det nedan, om Nollan vågar...")
                .start()
            }}
          />
        </div>
      ) : wrongPassword ? (
        <p className="text-center pt-3">Testa igen, Nollan...</p>
      ) : (
        <p className="text-center pt-3">Testa skriva in det nedan, om Nollan vågar...</p>
      )}
      <input
        onChange={handleChange}
        value={password}
        className="bg-[#484848] text-whiteText text-xl w-2/6 px-5 py-3 rounded-xl mt-5 focus:outline-none invalid:bg-inherit handheld:w-2/3 mobile:w-5/6"
        type="text" name="password" id="password_input"
        placeholder="Lösenord" /><br />
      <button
        onClick={handleClick}
        className="text-2xl font-modesto text-black bg-yellow rounded-xl px-12 py-1 m-auto mt-5 font-bold tracking-widest ease-linear duration-300 
        hover:cursor-pointer hover:shadow-xl hover:scale-105 hover:opacity-80 
        mobile:px-2 mobile:w-1/2">
        SKICKA
      </button>

      {
        character.name == "null" ? (
          (null)
        ) : !webPassword ? (<Character_message name={character.name} message={character.message} SetCondition={closeMessage} />
        ) : (null)
      }

    </div>
  )
}

export default Card_passwords