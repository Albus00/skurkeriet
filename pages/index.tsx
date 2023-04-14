import { useState } from 'react';
import Head from 'next/head'
import { stories } from '@/data/character_data'
import Character from '@/components/Character';
import Character_details from '@/components/Character_details';
import { useScrollBlock } from '@/functions/useScrollBlock';

export default function Home() {
  // Import the scroll block funtions
  const [blockScroll, allowScroll] = useScrollBlock();

  const [characterDetails, SetCharacterDetails] = useState({ id: 'allie', name: '[name]', story: '[story]' })
  const [renderDetails, SetRenderDetails] = useState(false); // Decides whether the character details box should be rendered

  // Called when clicking on a character
  function changeDetails(characterId: string) {
    // Get character details from json file
    let character = stories.find(stories => stories.id === characterId);
    if (character) { // Check that character is defined
      SetCharacterDetails(character); // Set the character details with useState
    }

    SetRenderDetails(true);   // Render the details box
    blockScroll();            // Block the user from scrolling the background when character details is open
  }

  return (
    <>
      <Head>
        <title>Skurkeriet</title>
        <meta name="description" content="Nolle-P ska bli vårt!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* Group image */}
        <div className='flex flex-col-reverse items-center h-screen w-screen bg-group bg-cover bg-center bottom-shadow'>
          <div className='text-whiteText text-center h-2/5'>
            <h1 className='mb-5'>SKURKERIET</h1>
            <h3>NOLLEP SKA BLI VÅRT</h3>
          </div>
        </div>

        {/* History */}
        <div className='text-center m-auto w-1/2 pt-4 pb-36'>
          <h2>HISTORIEN OM SKURKERIET</h2>
          <p>
            Skurkeriet träffades en natt i fängelset under den värsta stormen som 1800-talets amerikanska vilda västern
            någonsin skådat. Blixten träffade fängelset som skUrkarna satt i och det brann ned. Ryktet säger att det var
            skurkarna själva som anlade bran den. Sägen säger att en förbannelse lades över skurkar na den natten. Ingen
            vet hur de tog sig ur fängelset, men skurkarna överlevde branden och har sedan den natten hållit ihop. De har
            gått från stad till stad genom århundradena och skapat kaos. De åldras inte, de pratar inte, de fruktas vart
            de än går. Nu har de ett nytt mål. Nolle-p.
          </p>
        </div>

        {/* Characters */}
        <div className='w-full m-auto text-center px-5 pb-32'>
          <h4>KLICKA PÅ EN SKURK</h4>
          <div className='flex flex-wrap w-full'>
            {stories.map((character) => {
              return (
                <Character
                  key={character.id}
                  id={character.id}
                  columns={character.columns}
                  name={character.name}
                  changeDetails={changeDetails}
                />
              );
            })}
          </div>
        </div>

        {/* Character Details Box */}
        <Character_details
          condition={renderDetails}
          id={characterDetails.id}
          name={characterDetails.name}
          story={characterDetails.story} />
      </main>
    </>
  )
}
