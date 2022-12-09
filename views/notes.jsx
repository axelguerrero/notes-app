import React from 'react'
import Def from './default'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function Notes () {
  return (
    <Def>
        <main>
              <h1>Notes</h1>
            <div className="actionButtons">
              <div className='addButton'>
                <AddIcon/>
              </div>
              <div className="removeButton">
              <RemoveIcon/>
              </div>
            </div>
        </main>
    </Def>
  )
}

export default Notes