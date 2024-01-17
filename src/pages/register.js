import React, { useState } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";


const Register = () => {
  const [data, setData] = useState({
    fullName:"",
    email:"",
     password:""  });
  let handleSubmit = async (e) => {
    if(data.fullName==='' || data.email==='' || data.password===''){
      console.log('ALL FEILDS ARE MANDATORY')
    }else{
      const request=await fetch("http://localhost:4000/user/register",{
        method:'POST',
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },        
      });
      const resp= await request.json();
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
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "grey",
          flexDirection: "column",
          height: "450px",
          width: "500px",
          borderRadius: "10px",
        }}
      >
        <Typography variant="h4" color={"white"} mb={"20px"}>
          Register
        </Typography>
        <TextField
         value={data.fullName}
          onChange={changeHandler}
          name="fullName"
          id="filled-basic"
          label="Full Name"
          variant="filled"
          sx={{
            marginBottom: "25px",
            backgroundColor: "white",
            width: "350px",
            borderRadius: "7px",
          }}
        />

        <TextField
        value={data.email}
          onChange={changeHandler}          
          name="email"
          id="filled-basic"
          label="Email"
          variant="filled"
          type="email"
          sx={{
            marginBottom: "25px",
            backgroundColor: "white",
            width: "350px",
            borderRadius: "7px",
          }}
        />

        <TextField
        value={data.password}
          onChange={changeHandler}          
          name="password"
          sx={{
            marginBottom: "25px",
            backgroundColor: "white",
            width: "350px",
            borderRadius: "7px",
          }}
          id="filled-password-input"
          label="Password"
          type="password"
          
          variant="filled"
        />
          <Button
            variant="contained"
            sx={{ color: "white", width: "150px", marginBottom: "20px" }}
            onClick={handleSubmit}
          >
            Register
          </Button>
        <Typography>
          You do have account? <a href="./login">Login</a>{" "}
        </Typography>
      </Box>
      
    </div>
    </>
  );
};

export default Register;
