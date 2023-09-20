"use client"

import { useState } from 'react';
import Image from 'next/image';
import { stories } from '@/data/character_data'
import { useScrollBlock } from '@/hooks/useScrollBlock';
import useMediaQuery from '@/hooks/useMediaQuery'
import Character_details from '@/components/Character_details';
import Content from './Content';
import { redirect } from 'next/navigation';

export default function Page() {
  const isMobile = useMediaQuery('(max-width: 1024px)')

  // Import the scroll block functions
  const [blockScroll, allowScroll] = useScrollBlock();

  const [characterDetails, SetCharacterDetails] = useState({ id: 'regina', name: '[name]', story: '[story]' })   // Set character details placeholder
  const [renderDetails, SetRenderDetails] = useState(false);                                                    // Decides whether the character details box should be rendered

  // Called when clicking on a character
  function openDetails(characterId: string) {
    // Get character details from json file
    let character = stories.find(stories => stories.id === characterId);
    if (character) { // Check that character is defined
      SetCharacterDetails(character); // Set the character details with useState
    }

    SetRenderDetails(true);   // Render the details panel
    blockScroll();            // Block the user from scrolling the background when character details is open
  }

  async function closeDetails() {
    allowScroll();            // Allow scrolling when closing the details panel
    SetRenderDetails(false);   // Render the details panel
  }

  return (
    <main>
      {/* Group image */}
      <div className='flex flex-col-reverse items-left w-full h-screen bg-cover bg-left-bottom bg-black'>
        <div className='text-whiteText h-full w-full pl-[18%] pt-[15%] mobile:px-[5%] mobile:pt-[30%]'>
          <Image
            src={'/images/darkness.jpg'}
            width={1000}
            height={1000}
            unoptimized
            alt={'BLI EN DEL AV MÖRKRET'}
            sizes="50vw"
            className="
          object-contain
        " />
          <div className='w-1/2 pt-8 mobile:w-4/5 mobile:pt-[20%]'>
            <p className='text-xl text-left'>
              Sök själv eller föreslå någon du tror skulle passa in i nästa generation av Skurkeriet. Nedan finner du beskrivningar av de poster som erbjuds.
            </p>
            <a href={'/apply'}>
              <button
                className='bg-transparent rounded-3xl px-12 py-3 m-auto mt-10 font-modestoExpanded text-3xl text-yellow border-yellow border-2 ease-linear duration-500
                  hover:scale-110'
              >
                SÖK
              </button>
            </a><br />
            <a href={'/nominate'}>
              <button
                className='bg-transparent rounded-3xl px-12 py-3 m-auto mt-10 font-modestoExpanded text-3xl text-yellow border-yellow border-2 ease-linear duration-500
                  hover:scale-110'
              >
                NOMINERA
              </button>
            </a>
          </div>
        </div>
      </div>

      <Content openDetails={openDetails} />
      {/* Character Details Box */}
      <Character_details
        condition={renderDetails}
        SetCondition={closeDetails}
        id={characterDetails.id}
        name={characterDetails.name}
        story={characterDetails.story}
        isMobile={isMobile} />
    </main >
  )
}
