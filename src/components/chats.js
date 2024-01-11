import React from 'react'
import { Box,Avatar, Typography } from '@mui/material'
import './chats.css'
import jimmi from "../Images/jimmi.jpg"


const Chats = () => {
  return (
    <div> 
        <Box display="flex" alignItems="center" gap="10px" padding="10px" className="chats" >
    <Avatar src={jimmi} sx={{width:"35px",height:"35px",marginTop:"5px"}}     />
    <Box>
    <Typography variant='body2' fontWeight="bold" color="white">Jimmi</Typography>
    <Typography variant='body2' fontSize="12px" color="white">hello</Typography>
    </Box>
    </Box>
    <Box display="flex" alignItems="center" gap="10px"  padding="10px" className="chats">
    <Avatar src={jimmi} sx={{width:"35px",height:"35px",marginTop:"5px"}}     />
    <Box>
    <Typography variant='body2' fontWeight="bold" color="white">Jimmi</Typography>
    <Typography variant='body2' fontSize="12px"  color="white">hello</Typography>
    </Box>    </Box>
    <Box display="flex" alignItems="center" gap="10px" padding="10px" className="chats" >
    <Avatar src={jimmi} sx={{width:"35px",height:"35px",marginTop:"5px"}}     />
    <Box>
    <Typography variant='body2' fontWeight="bold" color="white">Jimmi</Typography>
    <Typography variant='body2' fontSize="12px" color="white">hello</Typography>
    </Box>    </Box>
    <Box display="flex" alignItems="center" gap="10px" padding="10px"  className="chats">
    <Avatar src={jimmi} sx={{width:"35px",height:"35px",marginTop:"5px"}}     />
    <Box>
    <Typography variant='body2' fontWeight="bold" color="white">Jimmi</Typography>
    <Typography variant='body2' fontSize="12px"  color="white">hello</Typography>
    </Box>    </Box>
    </div>
  )
}

export default Chats