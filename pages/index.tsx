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
        <div className='flex flex-col-reverse items-center h-screen w-screen bg-group bg-cover bg-center bottom-shadow'>
          <div className='text-whiteText text-center h-2/5'>
            <h1 className='mb-5'>SKURKERIET</h1>
            <h3>NOLLEP SKA BLI VÅRT</h3>
          </div>
        </div>
      </main>
    </>
  )
}
