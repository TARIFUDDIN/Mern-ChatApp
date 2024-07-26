import React, {
  
  useRef

} from "react";
import AppLayout from '../components/layout/AppLayout';
import { IconButton, Stack } from '@mui/material';
import {
  AttachFile as AttachFileIcon,
  Send as SendIcon,
} from "@mui/icons-material";
import { InputBox } from "../components/styles/StyledComponents";

import { sampleMessage } from '../constants/sampleData';
import MessageComponent from '../components/shared/MessageComponent';
import { grayColor, orange } from "../constants/color";
const user={
  _id:"ghmjḥghb",
  name:"Syed Tarif Ahmed"
}

const Chat = () => {
  const containerRef = useRef(null);
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
  <>
  <Stack
          ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={grayColor}
        height={"90%"}
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
      {sampleMessage.map((i)=>(
        <MessageComponent key={i._id}message={i} user={user}/>
      ))}
      </Stack>
      
      <form
        style={{
          height: "10%",
        }}
        onSubmit={submitHandler}
      >
      <Stack
      direction={"row"}
          height={"100%"}
          padding={"1rem"}
          alignItems={"center"}
          position={"relative"}
      >
    <IconButton sx={{
      position:"absolute",
      left:"1.5rem",
      rotate:"30deg",
    }}>
      <AttachFileIcon/>
    </IconButton>
    <InputBox 
                  placeholder="Type Message Here..."

    />
    <IconButton
    type="submit"
    sx={{
      rotate:"-30deg",
    bgcolor:orange,
    color:"white",
    marginLeft:"1rem",
    "&:hover":{
      bgcolor:"error.dark",
    },
    }}
    >
      <SendIcon/>
    </IconButton>
  </Stack>
  </form>
  </>
  );
};

export default  AppLayout()(Chat);
