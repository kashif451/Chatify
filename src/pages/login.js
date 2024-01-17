import React,{useState} from 'react'
import { Box, TextField, Typography ,Button} from "@mui/material";
import { Navigate } from 'react-router-dom';

const Login = () => {
  const [data, setData] = useState({
    email:"",
     password:""  });
  let handleSubmit = async (e) => {
    if(data.email==='' || data.password===''){
      console.log("ALL FEILDS ARE MANDATORY")
    }else{
      const request=await fetch("http://localhost:4000/user/login",{
        method:'POST',
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },   
        credentials: 'include',     
      });
      const resp= await request.json();
      <Navigate to="/chatify"/>
      console.log(resp)
    }    
  };
  let changeHandler = (e) => {
    setData({...data,
      [e.target.name]:e.target.value
    }
      );
  };
  return (
    <> 
    <div style={{display:"flex", alignItems:"center",justifyContent:"center",height:"100vh"}}> 
       <Box
        sx={{
          display: "flex",
          justifyContent:"center",
          alignItems:"center",
          backgroundColor: "grey",
          flexDirection: "column",
          height: "400px",
          width: "500px",
       
          borderRadius: "10px",
        
        }}
      >
     
        <Typography variant="h4" color={"white"} mb={"50px"}>Login</Typography>
       <TextField value={data.email}
          onChange={changeHandler}

          
          autoComplete="off"
          name="email" id="filled-basic"  label="Email" variant="filled" sx={{marginBottom:"25px",backgroundColor:'white',width:"350px",borderRadius:"7px"}} />

       <TextField 
          value={data.password}
          onChange={changeHandler}
          
          autoComplete="off"
          name="password"
       sx={{marginBottom:"25px",backgroundColor:'white',width:"350px",borderRadius:"7px"}}
          id="filled-password-input"
          label="Password"
          type="password"
          
          variant="filled"
        />
        <Button variant="contained" onClick={handleSubmit} sx={{color:"white",width:"150px",marginBottom:"20px"}}>Login</Button>
        <Typography sx={{outline:"none"}} >You don't have an account? <a href="./register">Register</a></Typography>
       
      </Box>
    </div>
 </>
  )
}

export default Login