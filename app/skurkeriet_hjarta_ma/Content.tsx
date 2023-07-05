import Image from 'next/image';
import Character from '@/components/Character';
import Socials_image from '@/components/Socials_image';
import { stories } from '@/data/character_data'
import Sponsor from '@/components/Sponsor';

type Props = {
  openDetails: Function
}

const Content = (props: Props) => {
  return (
    <div>
      {/* History */}
      <div className='text-center m-auto w-1/2 pt-4 pb-36
        handheld:w-4/5'>
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
      <div className='w-full m-auto text-center px-5 pb-10 handheld:px-0'>
        <h5 className='handheld:hidden'>KLICKA PÅ EN SKURK</h5>
        <div className='flex flex-wrap w-full handheld:flex-col'>
          {/* Generate character cards from the stories JSON file */}
          {stories.map((character) => {
            return (
              <Character
                key={character.id}
                id={character.id}
                columns={character.columns}
                name={character.name}
                changeDetails={props.openDetails}
              />
            );
          })}
        </div>
      </div>
      {/* Game rules */}
      <div className='m-auto w-3/5 pt-4 pb-36 handheld:w-4/5'>
        <h2>SPELREGLER</h2>
        <p>
          Som Nollan vet (eller åtminstone kommer att lära sig), så älskar Phadderister att leka. Skurkeriet vill därför introducera Phadderistspelet.
          Ett spel där Nollan genom att samla idolkort kan lära känna Phadderister och andra Nollan.<br />
          <br />
        </p>
        <h6>NOLLAN BEHÖVER</h6>
        <ul className='list-disc pl-[20px]'>
          <li>Tre idolkort. Om Nollan har fler än så får Nollan välja ut tre kort att spela med</li>
          <li>En annan Nollan.</li>
        </ul>
        <br />
        <h6>SÅ HÄR SPELAR NOLLAN</h6>
        <p>
          Varje Nollan tar sina tre kort och studerar dem. Phadderistspelet handlar om såväl tur som skicklighet. Försök lägga kortens färdighetspoäng
          på minnet. Vänd sedan på korten så att avigsidan hamnar uppåt och blanda. Framför vardera Nollan ligger nu en hög med tre kort i okänd ordning.
          Utse vem av Nollan som ska börja – Spelare 1.
          <br />
          Spelare I bestämmer vilken av de tre färdigheterna 1, 2 eller 3 som ska spelas ut först. På given signal vänder båda Nollan upp sitt översta
          kort i högen. Nollan med högst färdighetspoäng på den valda färdigheten 1,2 eller 3 vinner omgången. Nu är det spelare II:s tur att bestämma
          vilken av de resterande färdigheterna som ska spelas ut. Här kan spelare II tänka taktiskt och försöka komma ihåg hur många färdighetspoäng
          kvarvarande idolkort har. Förslagsvis väljer spelare II att spela ut en färdighet som har höga poäng på båda korten.<br />
          <br />
          På given signal vänder båda Nollan upp det översta kortet i högen. Nollan med högst färdighetspoäng på den valda färdigheten 1,2 eller 3
          vinner andra omgången. Om en av Nollan har vunnit båda omgångarna är spelet slut. Om Nollan har vunnit en gång var fortsätter spelet.<br />
          <br />
          Nu återstår bara en färdighet att spelas ut. På given signal vänder båda Nollan upp det sista kortet i högen. Om Nollan av en händelse
          skulle vinna lika många omgångar var vinner den som har flest använda färdighetspoäng.
        </p>
        <Image
          src="/images/rules.jpg"
          alt="Regler"
          width="1200"
          height="500"
          className='mt-6'
        />
      </div>

      {/* Social medias */}
      <div className='text-center m-auto w-2/3 pt-4 pb-64'>
        <h2>SOCIALA MEDIER</h2>
        <p className='text-center'>
          psst...<br />
          <br />
          Enligt rykten kan det vara bra att Nollan har en god sikt <br />
          på våra sociala medier för lite &quot;behind the scenes&quot;...
        </p>
        <div className='flex justify-center pt-10'>
          <Socials_image company='facebook' link='https://www.facebook.com/Skurkeriet' />
          <Socials_image company='instagram' link='https://www.instagram.com/skurkeriet2324/' />
        </div>
      </div>

      {/* Tengil */}
      <div className='text-center m-auto w-1/3 pt-4 pb-36 handheld:w-4/5'>
        <h2 className='font-vinyl'>ALL MAKT ÅT TENGIL</h2>
        <p>
          All makt åt Tengil, vår Befriare. Vid tidens begynnelse, strax innan Big Bang, steg ett mäktigt väsen fram ur skuggorna. Det som givit styrka
          och hopp åt Skurkarna. Detta väsen, Tengil, tog formen av en ståtlig maniken för att nå er alldagliga! Tengil höjer Skurkeriets omoral och
          beskyddar dess handlingar. Han höljer Skurkarnas själar i skuggor och fyller deras hjärtan med ofog. Skurkeriet bär med sig Tengils avatar
          från och till, men frukta ej! Tengil har trots sitt hårda yttre en av de stillsammaste själar. Nollan löper ingen risk att utsättas för Tengils
          vrede. Sanningen är dock att ingen vet vad Tengil planerar i skuggorna annat än han själv.<br />
          <br />
          P.S also good at parties.
        </p>
        <Image
          src="/images/tengil.png"
          alt="All makt åt Tengil"
          width="700"
          height="200"
          className='mt-10'
        />
      </div>

      {/* Sponsors */}
      <div className="
      flex flex-wrap justify-evenly items-center w-full py-20 px-32
      handheld:px-20 handheld:flex-col handheld:space-y-10
      mobile:px-8   
      ">
        <Sponsor company="ICA" className="grow-1 h-52 w-1/3 mobile:w-3/5" random={false} />
        <Sponsor company="NAB" className="grow-1 h-48 w-1/3 mobile:w-3/5" random={true} />
        <Sponsor company="Micropower" className="grow-2 h-48 w-2/3 mobile:w-full" random={false} />
      </div>
    </div>
  )
}

export default Content