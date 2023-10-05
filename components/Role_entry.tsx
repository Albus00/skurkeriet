"use client"

type Props = {
  role: string
  role2: string
  previous: string
  text: string
}

const Role_entry = (props: Props) => {
  // Find webpages embedded in the role text and split the string
  let webText = props.text.split('&a');


  return (
    <div>
      <hr className='my-6 w-[90%] m-auto h-[2px] border-0 rounded bg-whiteText' />
      <div className='px-6'>
        <h3 className="new-h3">{props.role}</h3>
        {props.role2 != "" ? <h4 className='new-h4 pl-3'>({props.role2})</h4> : null}
        <div className='pl-10 mt-4 mobile:pl-0'>
          {/* If webpages are found; add them in between the splits in the text */}
          {webText.length > 1 ?
            (
              <p>
                {webText[0]}
                <a className="font-semibold hover:underline" href="/?redir=true">skurkeriets</a>
                {webText[1]}
                <a className="font-semibold hover:underline" href="https://basaret.se">basårets</a>
                {webText[2]}
              </p>
            ) : (
              <p>{props.text}</p>)}
        </div>
        <div className="font-modestoExpanded text-2xl pl-10 mt-2 mobile:text-lg mobile:pl-0">
          <p className="text-left inline handheld:text-xl mobile:text-base">Skurkeriet 23/24:s {props.role.split(',')[0] + ": "}</p>
          <p className="inline handheld:block mobile:underline">{props.previous}</p>
        </div>
      </div>
    </div >
  )
}

export default Role_entry