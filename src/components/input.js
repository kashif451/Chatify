import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { faPaperclip, faImage} from '@fortawesome/free-solid-svg-icons'

import {Box, Button, TextField} from "@mui/material"

const Input = ({inputData}) => {
  const [message,SetMessage] =useState({text:""})
  // const [usermsg,setUserMsg] =useState([])
  let searcHandler = (e)=>{
   
    SetMessage({...message,
      [e.target.name]:e.target.value})
  }
  let sendHandler = (e)=>{
    e.preventDefault()
  
  SetMessage({text:""})

  inputData(message)
  }
  
  return (
    <>
    {/* <div> */}
    <Box height="50px" bgcolor="white" p="10px" display="flex"  >
        <input onChange={searcHandler} value={message.text} name='text' type='text' placeholder='Text message here ...' style={{ width:"100%",outline:"none",border:"none",color:"#2f2d52", fontSize:"18px"}}/>
    
    <Box display="flex " alignItems="center"  gap="10px">
    <FontAwesomeIcon icon={faPaperclip}  />
    <input type='file' style={{display:"none"}}/>
        <label htmlFor='file'>
        <FontAwesomeIcon icon={faImage} />
        </label>
         <Button onClick={sendHandler} variant='contained' sx={{backgroundColor:"#8da4f1"}}> Send</Button>
    </Box>
    </Box>

    {/* </div> */}
    {/* <div style={{marginBottom:"200px", position:"fixed",top:"0px"}}>
      {
        usermsg.map((d)=>{
          return(
            <h1>{d.text}</h1>
           
          )

        })
      }
    </div> */}
    </>
  )
}

export default Input