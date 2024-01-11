import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { faPaperclip, faImage} from '@fortawesome/free-solid-svg-icons'

import {Box, Button, TextField} from "@mui/material"
const Input = () => {
  return (
    <div>
    <Box height="11vh" bgcolor="white" p="10px" display="flex" >
        <input type='text' placeholder='Text message here ...' style={{ width:"100%",outline:"none",border:"none",color:"#2f2d52", fontSize:"18px"}}/>
    
    <Box display="flex " alignItems="center"  gap="10px">
    <FontAwesomeIcon icon={faPaperclip}  />
    <input type='file' style={{display:"none"}}/>
        <label htmlFor='file'>
        <FontAwesomeIcon icon={faImage} />
        </label>
         <Button variant='contained' sx={{backgroundColor:"#8da4f1"}}> Send</Button>
    </Box>
    </Box>

    </div>
  )
}

export default Input