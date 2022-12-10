import React from "react"
import Def from "../default"
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';

function show (data) {
    return (
        <Def>
          <main>
            <body>
            <h1>{data.notes.title}</h1>
            <div>
              <h5>
                {data.notes.description}
              </h5>
            </div>
            <div className="actionButtons">
                <div className="editButton">
                    <a href={`/notes/${data.notes.id}/edit`}><ModeEditIcon className=""/></a>
                </div>
                <form method="POST" action={`/notes/${data.notes.id}?_method=DELETE`}> 
                <div className="trashButton">
                <DeleteIcon />
                </div>
              </form>
              </div> 
            </body>
          </main>
        </Def>
    )
}

module.exports = show
