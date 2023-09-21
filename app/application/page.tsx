"use client"

import { useState } from 'react';
import Image from 'next/image';
import { roles } from '@/data/role_data'
import { useScrollBlock } from '@/hooks/useScrollBlock';
import useMediaQuery from '@/hooks/useMediaQuery'
import Character_details from '@/components/Character_details';
import Content from '../Content';
import { redirect } from 'next/navigation';
import Role_entry from '@/components/Role_entry';

export default function Page() {
  const isMobile = useMediaQuery('(max-width: 1024px)')

  return (
    <main>
      {/* Group image */}
      <div className='flex flex-col-reverse items-left w-full h-screen bg-cover bg-left-bottom bg-black'>
        <div className='text-whiteText h-full w-full pl-[18%] pt-[10%] mobile:px-[5%] mobile:pt-[30%]'>
          <div className='fadeIn1 relative h-1/3 w-4/5'>
            <Image
              src={'/images/darkness.jpg'}
              fill
              unoptimized
              alt={'BLI EN DEL AV MÖRKRET'}
              sizes="50vw"
              className="object-contain object-left" />
          </div>
          <div className='w-1/2 pt-8 mobile:w-4/5 mobile:pt-[20%]'>
            <p className='fadeIn2 text-xl text-left'>
              Sök själv eller föreslå någon du tror skulle passa in i nästa generation av Skurkeriet. Nedan finner du beskrivningar av de poster som erbjuds.
            </p>
            <a href={'/apply'}>
              <button
                className='fadeIn3 bg-transparent rounded-3xl px-12 py-3 m-auto mt-10 font-modestoExpanded text-3xl text-yellow border-yellow border-2 ease-linear duration-500
                  hover:scale-110'
              >
                SÖK
              </button>
            </a><br />
            <a href={'/nominate'}>
              <button
                className='fadeIn4 bg-transparent rounded-3xl px-12 py-3 m-auto mt-5 font-modestoExpanded text-3xl text-yellow border-yellow border-2 ease-linear duration-500
                  hover:scale-110'
              >
                NOMINERA
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className='mt-14 px-40'>
        <h1 className='new-h1'>Skurkeriet postbeskrivningar</h1>
        {/* Generate character cards from the stories JSON file */}
        {roles.map((roles) => {
          return (
            <Role_entry
              key={roles.id}
              role={roles.role}
              role2={roles.role2}
              previous={roles.name}
              text={roles.text}
            />
          );
        })}
        <Role_entry role='Webbansvarig' role2='' previous='Albin Kjellberg' text='
          Som Webbansvarig har du koll på Skurkeriets och basårets hemsidor. Du uppdaterar hemsidorna och
          ser till att allting fungerar som det ska. Som Webbansvarig sitter du även med i tryck&PR-tvärgruppen
          och hjälper till med det grafiska arbetet.'
        />
        <Role_entry role='Gyckelansvarig' role2='' previous='Ella Bergström' text='
          Som Gyckelansvarig har du det huvudsakliga ansvaret för att gyckel blir gjorda. Som Gyckelansvarig
          kommunicerar du även med andra gyckelansvariga i phadderier/festerier och kommer överens om
          gemensamma gyckel som kan göras. Som gyckelansvarig ser du till att alla skurkar jobbar tillsammans
          för att göra så bra gyckel som möjligt. Gyckel görs både för basårets Nolle-P, stora Nolle-P samt till
          olika sittningar och evenemang som sker under årets lopp.'
        />
        <Role_entry role='Basårsansvarig' role2='' previous='' text='
          Som Basårsansvarig är du den som har det huvudsakliga ansvaret över att basårets mottagning planeras
          och genomförs. Du kommer att vara projektledare under basårets mottagning men också se till att
          arbetet inför mottagningen flyter på. Som basårsansvarig kommer du att jobba nära tillsammans med
          många av de andra posterna. Men lite extra tillsammans med aktivitetsansvarig och fadderansvarig då
          dessa poster också spelar en stor roll i basårets mottagning.'
        />
        <Role_entry role='' role2='' previous='' text='
          '
        />
        <Role_entry role='' role2='' previous='' text='
          '
        />
        <Role_entry role='' role2='' previous='' text='
          '
        />
      </div>

    </main >
  )
}
