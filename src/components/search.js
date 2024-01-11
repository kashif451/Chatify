import React  from 'react'
import { Box,Avatar, Typography } from '@mui/material'
// import { hover } from '@testing-library/user-event/dist/hover'


const Search = () => {
   
   
   
  return (
    <div>
        <Box borderBottom="1px solid white" padding="10px" >
            <input type='text' placeholder='Find a user' style={{backgroundColor:"transparent",border:"none",outline:'none',color:'white'}}/>
           

        </Box>
    </div>
  )
}

export default Search