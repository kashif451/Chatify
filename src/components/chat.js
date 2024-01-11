import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Typography } from '@mui/material'
import  { faUserPlus ,faVideo,faEllipsis} from '@fortawesome/free-solid-svg-icons'
import Input from './input'

import React from 'react'
import Messages from './messages'

const Chat = () => {
  return (
    <div  >
      <Box  height="10vh" bgcolor="#5d5b8d" color="white" display="flex" justifyContent="space-between" alignItems="center" borderRadius="0px 8px 0px 0px">
        <Typography variant='body2' fontWeight="bold" ml="5px" >Jimmi</Typography>
        <Box fontSize="20px" width="130px" display="flex" justifyContent="space-around"  >
        <FontAwesomeIcon icon={faUserPlus} />
        <FontAwesomeIcon icon={faVideo} /> 
        <FontAwesomeIcon icon={faEllipsis} />
        </Box>

        
      </Box>
      <Box    sx={{height:"67vh" ,backgroundColor:"#F8F4EC",padding:"10px",overflow:"scroll"}} >
      <Messages  />
      </Box>
      <Input/>

    </div>
  )
}

export default Chat