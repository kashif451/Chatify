import { Box, Typography,Avatar, Button } from '@mui/material'
import React from 'react'
import kashif from "../Images/kashif.jpg"
const Navbar = () => {
  return (
    <div>
        <Box height="70px" bgcolor="#332941" color="white" display="flex" justifyContent="space-around" alignItems="center">
          <Typography variant='h6' color='white' fontWeight="bold" mr="4px">Chatify</Typography>
          <Box height="30px" width="85px" display="flex" justifyContent="space-around">
          <Avatar src={kashif} sx={{width:"25px",height:"25px"}}     />
          <Typography variant='body2'mt="3px" ml="2px" fontWeight="bold"  >Kashif</Typography>
          <Button variant='text'  sx={{fontSize:"12px",paddingRight:"6px"}}>Login</Button>
          </Box>
        </Box>
    </div>
  )
}

export default Navbar