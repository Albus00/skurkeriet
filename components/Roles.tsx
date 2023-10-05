import React from 'react'
import Role_entry from './Role_entry';
import { roles } from '@/data/role_data';

const Roles = () => {
  return (
    <div>
      <h1 className='new-h1'>Skurkeriet postbeskrivningar</h1>
      <div className='mt-14 px-40 mb-32 mobile:px-2'>
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
  )
}

export default Roles