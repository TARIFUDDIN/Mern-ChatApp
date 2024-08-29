import React, { useEffect } from 'react'
import Header from './Header';
import { Drawer, Grid, Skeleton } from "@mui/material";
import {
  setIsDeleteMenu,
  setIsMobile,
  setSelectedDeleteChat,
} from "../../redux/reducers/misc";

import Title from "../shared/title";
import ChatList from '../specific/ChatList';
import { samepleChats } from '../../constants/sampleData';
import { useParams } from 'react-router-dom';
import Profile from '../specific/Profile';
import { useMyChatsQuery } from '../../redux/api/api';
import { useDispatch, useSelector } from 'react-redux';
import { useErrors } from '../../hooks/hook';
const AppLayout = () => (WrappedComponent)=>{
  return (props)=>{
    const params = useParams();
    const dispatch=useDispatch();
    const chatId = params.chatId;
    const {isMobile}=useSelector((state)=>state.misc);
const {isLoading ,data,isError,error,refetch}=useMyChatsQuery("");
useErrors([{isError,error}]);
console.log(data);
const handleMobileClose=()=>dispatch(setIsMobile(false));
    return (
    <>
    <Title/>
      <Header/>
      <Grid container height={"calc(100vh-4rem)"}>
      <Grid item sm ={4} md={3} sx={{
        display:{xs:"none",sm:"block"},
      }}
height={"100%"}>{
isLoading?AppLayout(<Skeleton/>):(
  <Drawer open ={isMobile} onClose={handleMobileClose}>
  <ChatList chats={samepleChats} 
chatId={chatId}
  newMessagesAlert={[
    {
chatId,
count:4,
    },
  ]}
  
/>
</Drawer>
)
}
      </Grid>

      <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
            <WrappedComponent {...props}  />
          </Grid>
          <Grid item md={4} lg={3} height={"100%"}
          sx={{
            display:{xs:"none", md:"block"},
            padding:"2rem",
            bgcolor:"rgba(0,0,0,0.85)",
          }}
          >
          <Profile/>
          </Grid>
</Grid>
    </>
  );
};
};

export default AppLayout;
