"use client"

import Image from 'next/image';
import { roles } from '@/data/role_data'
import useMediaQuery from '@/hooks/useMediaQuery'
import Character_details from '@/components/Character_details';
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
              Sök själv eller föreslå någon du tror skulle passa in i nästa generation av Skurkeriet.
              Nedan finner du beskrivningar av de poster som erbjuds.&nbsp;
              <a href='/?redir=true' className='inline-block font-semibold ease-linear duration-500'> Klicka här för att gå tillbaka till skurkeriet.se</a>
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

      <div>
        <h1 className='new-h1'>Skurkeriet postbeskrivningar</h1>
        <div className='mt-14 px-40 mb-32 mobile:px-4'>
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
        </div>
      </div>

    </main >
  )
}
