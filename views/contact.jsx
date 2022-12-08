import React, { useState } from 'react';
import Def from './default';
import {Box, Button, TextField, MenuItem} from "@mui/material"

function Contact(data) {
  return(
    <Def>
      <main>
        <body>
          <h1>Contact us</h1>
          <div className="contactForm">
            <form>
              <div>
              <TextField id="outlined-basic" label="Name" variant="outlined" />
              </div>
              <div>
              <TextField id="outlined-basic" label="Email" variant="outlined" />
              </div>
              <div>
                <Button variant="outlined">Submit</Button>
              </div>
            </form>
              </div>
            </body>
          </main>
        </Def>
      )
    }
 

export default Contact;