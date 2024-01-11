import React from 'react'
import { Box, TextField, Typography ,Button} from "@mui/material";

const Login = () => {
  return (
    <div> 
       <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems:"center",
          backgroundColor: "grey",
          flexDirection: "column",
          height: "400px",
          width: "500px",
          marginTop: "100px",
          borderRadius: "10px",
        
        }}
      >
        <Typography variant="h4" color={"white"} mb={"50px"}>Login</Typography>
       <TextField id="filled-basic"  label="Email" variant="filled" sx={{marginBottom:"25px",backgroundColor:'white',width:"350px",borderRadius:"7px"}} />

       <TextField
       sx={{marginBottom:"25px",backgroundColor:'white',width:"350px",borderRadius:"7px"}}
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="none"
          variant="filled"
        />
        <Button variant="contained" sx={{color:"white",width:"150px"}}>Login</Button>
        <Typography>You do have account? Register </Typography>
      </Box>
    </div>
  )
}

export default Login