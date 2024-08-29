import React, {
  
  Fragment,
  useRef

} from "react";
import AppLayout from '../components/layout/AppLayout.jsx';
import { IconButton, Stack } from '@mui/material';
import {
  AttachFile as AttachFileIcon,
  Send as SendIcon,
} from "@mui/icons-material";
import { InputBox } from "../components/styles/StyledComponents.jsx";
import FileMenu from "../components/dialogs/FileMenu";

import MessageComponent from "../components/shared/MessageComponent.jsx";
import { grayColor, orange } from "../constants/color";
import { sampleMessage } from "../constants/sampleData.js";
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
  <Fragment>
  <Stack
          ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={grayColor}
        height={"90vh"}
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
          height: "10vh",
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
    }}
 
    >
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
  <FileMenu/>
  </Fragment>
  );
};

export default  AppLayout()(Chat);
