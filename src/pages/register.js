import React, { useState } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
const Register = () => {
  const [data, setData] = useState({
    username:"",
    email:"",
     password:""  });
     const [records,setRecords] =useState([])
  let handleSubmit = (e) => {
    e.preventDefault();

    let newRecords={...data,id: new Date().getTime().toString()}

    setRecords([...records,newRecords])
    setData({username:'',email:'',password:""})
    
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
         value={data.username}
          onChange={changeHandler}
         
          autoComplete="off"
          name="username"
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

          
          autoComplete="off"
          name="email"
          id="filled-basic"
          label="Email"
          variant="filled"
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
          
          autoComplete="off"
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
        <NavLink to="/login">
          <Button
            variant="contained"
            sx={{ color: "white", width: "150px", marginBottom: "20px" }}
            onClick={handleSubmit}
          >
            Register
          </Button>
        </NavLink>
        <Typography>
          You do have account? <a href="./login">Login</a>{" "}
        </Typography>
      </Box>
      
    </div>
    <div>
    {
        records.map((g)=>{
          return(
            <div >
              <h1 style={{backgroundColor:"#2f2dff",display:"inline"}}>  {g.username}</h1>
              <h1 style={{backgroundColor:"#2f2dff",display:"inline"}}>  {g.email}</h1>
              <h1 style={{backgroundColor:"#2f2dff",display:"inline"}}>  {g.password}</h1>
           
            </div>
          )
        }

        )
      }
    </div>
    </>
  );
};

export default Register;
