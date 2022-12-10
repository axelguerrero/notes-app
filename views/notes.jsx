import React from 'react'
import Def from './default'
import NotesCard from "./notes/notesCard"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function Notes () {
  return (
    <Def>
        <main>
            <h1>Notes</h1>
              <div className='addButton'>
                <a href="notes/new"><AddIcon/></a>
              </div>
            <div>
            </div>
        </main>
    </Def>
  )
}

module.exports = Notes