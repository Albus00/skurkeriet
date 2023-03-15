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

        {/* History */}
        <div className='text-center pt-8 px-52'>
          <h2>HISTORIEN OM SKURKERIET</h2>
          <p>
            Skurkeriet träffades en natt i fängelset under den värsta stormen som 1800-talets amerikanska vilda västern
            nå gonsin skådat. Blixten träffade fängelset som skUrkarna satt i och det brann ned. Ryktet säger att det var
            skurkarna själva som anlade bran den. Sägen säger att en förbannelse lades över skurkar na den natten. Ingen
            vet hur de tog sig ur fängelset, men skurkarna överlevde branden och har sedan den natten hållit ihop. De har
            gått från stad till stad genom århundra derna och skapat kaos. De åldras inte, de pratar inte, de fruktas vart
            de än går. Nu har de ett nytt mål. Nolle-p.
          </p>
        </div>
      </main>
    </>
  )
}
