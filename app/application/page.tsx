import Image from 'next/image';
import Roles from '@/components/Roles';

export default function Page() {
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
              <a href='/?redir=true' className='inline-block font-semibold'> Klicka här för att gå tillbaka till skurkeriet.se</a>
            </p>
            <a href='https://docs.google.com/forms/d/e/1FAIpQLSdMqKqnuWUcQkBT6GY4iDXrmDStPdkoGyr1z2s-FlnxqVgB7g/viewform?usp=sf_link'>
              <button
                className='fadeIn3 bg-transparent rounded-3xl px-12 py-3 m-auto mt-10 font-modestoExpanded text-3xl text-yellow border-yellow border-2 ease-linear duration-500
                  hover:scale-110'
              >
                SÖK
              </button>
            </a><br />
            <a href='https://docs.google.com/forms/d/e/1FAIpQLSePqwOmINrGqntq1Ugwh-y00eTYywFqFYTVgU6mSAIkZsTltA/viewform?usp=sf_link'>
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

      {/* Render the roles */}
      <Roles />

    </main >
  )
}
