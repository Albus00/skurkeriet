type Props = {
  role: string
  role2: string
  previous: string
  text: string
}

const Role_entry = (props: Props) => {
  return (
    <div>
      <hr className='my-6 w-5/6 m-auto h-[2px] border-0 rounded bg-whiteText' />
      <div className='px-8'>
        <h3 className="new-h3">{props.role}</h3>
        {props.role2 != "" ? <h4 className='new-h4 pl-3'>({props.role2})</h4> : null}
        <p className='pl-10 mt-4 mobile:pl-0'>
          {props.text}
        </p>
        <p className="font-modestoExpanded text-2xl pl-10 mt-2 mobile:text-lg mobile:pl-0">
          Skurkeriet 23/24:s {props.role.split(',')[0] + ": " + props.previous}
        </p>
      </div>
    </div>
  )
}

export default Role_entry