"use client"

import { useState } from 'react';
import Image from 'next/image';
import { stories } from '@/data/character_data'
import { useScrollBlock } from '@/hooks/useScrollBlock';
import useMediaQuery from '@/hooks/useMediaQuery'
import Character_details from '@/components/Character_details';
import Content from './Content';

export default function Page() {
  const isMobile = useMediaQuery('(max-width: 1024px)')

  // Import the scroll block functions
  const [blockScroll, allowScroll] = useScrollBlock();

  const [characterDetails, SetCharacterDetails] = useState({ id: 'allie', name: '[name]', story: '[story]' })   // Set character details placeholder
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

  //#region chatgpt solution
  // import React, { useState, useEffect } from 'react';
  // import Image from 'next/image';
  // import { stories } from '@/data/character_data';
  // import Character from '@/components/Character';
  // import Character_details from '@/components/Character_details';
  // import { useScrollBlock } from '@/hooks/useScrollBlock';
  // import Socials_image from '@/components/Socials_image';
  // import Footer from '@/components/Footer';

  // export default function Page() {
  //   const [blockScroll, allowScroll] = useScrollBlock();

  //   const [characterDetails, setCharacterDetails] = useState({
  //     id: 'allie',
  //     name: '[name]',
  //     story: '[story]',
  //   });
  //   const [renderDetails, setRenderDetails] = useState(false);

  //   function openDetails(characterId: string) {
  //     const character = stories.find((story) => story.id === characterId);
  //     if (character) {
  //       setCharacterDetails(character);
  //     }
  //     setRenderDetails(true);
  //     blockScroll();
  //   }

  //   function closeDetails() {
  //     allowScroll();
  //     setRenderDetails(false);
  //   }

  //   useEffect(() => {
  //     if (renderDetails) {
  //       blockScroll();
  //     } else {
  //       allowScroll();
  //     }
  //   }, [renderDetails]);
  //#endregion

  return (
    <main>
      {/* Group image */}
      {!isMobile ? (
        <div className='flex flex-col-reverse items-center w-full h-screen bg-cover bg-center bg-group'>
          <div className='text-whiteText text-center h-2/5'>
            <h1 className='mb-5'>SKURKERIET</h1>
            <h3>NOLLEP SKA BLI VÅRT</h3>
          </div>
        </div>
      ) : (
        <div className='h-screen'>
          <div className='relative w-full aspect-square'>
            <Image
              src={'/images/group-mobile.jpg'}
              fill
              priority
              unoptimized={true}    // Hidden gem setting
              alt="Skurkeriet"
              className='object-cover'
            />
          </div>
          <div className='text-whiteText text-center pt-8 mt-20'>
            <h1 className='mb-2'>SKURKERIET</h1>
            <h3>NOLLEP SKA BLI VÅRT</h3>
          </div>
        </div>
      )}
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
