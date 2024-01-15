import React from "react";
import { Box, Avatar, Typography } from "@mui/material";
import jimmi from "../Images/jimmi.jpg";

const Message = ({text}) => {
  return (
    <div>
      <Box display="flex" alignItems="center" gap="30px" flexDirection="row-reverse">
        <Box mb="25px" >
          <Avatar
            src={jimmi}
            sx={{ width: "35px", height: "35px", marginTop: "5px" }}
          />
          <Typography variant="body2" color="#808080">
            Just Now
          </Typography>
        </Box>
        <Box
          bgcolor="#8da4f1"
          color="white"
          height="35px"
          width="200px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="0px 10px 10px 10px"
        >
         
              <Typography variant="body1" fontWeight="550">
              {" "}
             {text}
            </Typography>
           
        </Box>
      </Box>
    </div>
  );
};

export default Message;
