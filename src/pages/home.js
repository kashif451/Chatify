import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react'
import Navbar from '../components/navbar';
import Chat from '../components/chat';
import Search from '../components/search';
import Chats from '../components/chats';



const Home = () => {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",}} >
    <Box display="flex" justifyContent="center" alignItems="center"  width="900px"  >
        <Grid container spacing={0} height={600} overflow="hidden" borderRadius={4}   >
  
  <Grid item md={4} sx={{backgroundColor:'#3D3C5F', }}>
    <Navbar/>
    <Search/>
    <Chats/>
  </Grid>
  <Grid item md={8} sx={{backgroundColor:"grey",  }}>
  <Chat/>
  </Grid>
</Grid>
</Box>
    </div>
  )
}

export default Home