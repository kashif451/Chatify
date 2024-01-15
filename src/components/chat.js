import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Typography } from '@mui/material'
import  { faUserPlus ,faVideo,faEllipsis} from '@fortawesome/free-solid-svg-icons'
import Input from './input'

import React, {useState} from 'react'
import Messages from './messages'

const Chat = () => { 
  const [usermsg,setUserMsg] =useState([])

let inputData =(data)=>{
   console.log(data)
   let newData = {...data,id:usermsg.length+1}
  setUserMsg([...usermsg,newData])
}

  return (
    <div style={{height:"calc(100vh - 140px)"}} >
      <Box  height="70px"  bgcolor="#5d5b8d" color="white" display="flex" justifyContent="space-between" alignItems="center" borderRadius="0px 8px 0px 0px">
        <Typography variant='body2' fontWeight="bold" ml="5px" >Jimmi</Typography>
        <Box fontSize="20px" width="130px" display="flex" justifyContent="space-around"  >
        <FontAwesomeIcon icon={faUserPlus} />
        <FontAwesomeIcon icon={faVideo} /> 
        <FontAwesomeIcon icon={faEllipsis} />
        </Box>

        
      </Box>
      <Box    sx={{height:"calc(100% - 155px)" ,backgroundColor:"#F8F4EC",padding:"10px",overflowY:"scroll"}} >
      <Messages usermsg= {usermsg} />
      </Box>
      <Input inputData={inputData}/>

    </div>
  )
}

export default Chat