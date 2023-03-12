import Head from 'next/head'

export default function Home() {
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
        <div className='flex flex-col-reverse items-center h-screen w-screen bg-group bg-cover bg-center'>
          <div className='text-whiteText'>
            <p className='text-8xl tracking-widest'>SKURKERIET</p>
            <p>NOLLEP SKA BLI VÅRT</p>
          </div>
        </div>
      </main>
    </>
  )
}
