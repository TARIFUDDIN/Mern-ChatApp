import { AppBar, IconButton, Toolbar, Typography,Box,  Tooltip, Backdrop,
} from '@mui/material';
import React, { Suspense } from 'react'
import { lazy } from 'react';
import {  Add as AddIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
  Group as GroupIcon,
  Logout as LogoutIcon,
  Notifications as NotificationsIcon,

} from "@mui/icons-material";
import { orange } from "../../constants/color"
import {useNavigate} from "react-router-dom";
const SearchDialog = lazy(() => import("../specific/Search"));
const NotifcationDialog = lazy(() => import("../specific/Notifications"));
const NewGroupDialog = lazy(() => import("../specific/NewGroup"));


import { useState } from 'react';

const Header = () => {
  const navigate=useNavigate();
  const[isMobile,setIsMobile]=useState(false);
  const[isSearch,setIsSearch]=useState(false);
  const[isNewGroup,setIsNewGroup]=useState(false);
  const[isNotification,setIsNotification]=useState(false);
  
    const handelMobile=()=>{
setIsMobile((prev)=>!prev);
    };
    const openSearchDialog=()=>{
      setIsSearch((prev)=>!prev);
            };
     const openNewGroup=()=>{
      setIsNewGroup((prev)=>!prev);
     }
     const navigateTogroup=()=> navigate("/groups");
     const logoutHandler=()=>{
      setIs((prev)=>!prev);
     }
     const openNotification=()=>{
      setIsNotification((prev)=>!prev);
     }
  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar
          position="static"
          sx={{
            bgcolor: orange,
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              sx={{
                display: { xs: "none", sm: "block" },
              }}
            >
              Chattu
            </Typography>

            <Box
              sx={{
                display: { xs: "block", sm: "none" },
              }}
            >
              <IconButton color="inherit" onClick={handelMobile}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
              }}
            />
            <Box>
              <IconBtn
                title={"Search"}
                icon={<SearchIcon />}
                onClick={openSearchDialog}
              />

              <IconBtn
                title={"New Group"}
                icon={<AddIcon />}
                onClick={openNewGroup}
              />

              <IconBtn
                title={"Manage Groups"}
                icon={<GroupIcon />}
                onClick={navigateTogroup}
              />

<IconBtn
                title={"Notifications"}
                icon={<NotificationsIcon />}
                onClick={openNotification}
/>
              <IconBtn
                title={"Logout"}
                icon={<LogoutIcon />}
                onClick={logoutHandler}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
{
  isSearch && (
<Suspense fallback={<Backdrop open/>}>

    <SearchDialog/>
    </Suspense>
  )
}
{
  isNotification && (
<Suspense fallback={<Backdrop open/>}>

    <NotifcationDialog/>
    </Suspense>
  )
}
{
  isNewGroup && (
<Suspense fallback={<Backdrop open/>}>

    <NewGroupDialog/>
    </Suspense>
  )
}

</>
  );
};
const IconBtn=({title,icon,onClick})=>{
    return(
        <Tooltip title={title}>
         <IconButton color="inherit" size="large" onClick={onClick}>
          {icon}
         </IconButton>
         
        </Tooltip>
    )
}
export default Header;
