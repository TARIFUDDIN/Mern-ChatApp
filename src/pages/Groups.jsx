import { Drawer, Grid, IconButton, Stack, TextField, Tooltip, Typography } from '@mui/material';
import { matBlack } from '../constants/color';
import React from 'react';
import { Link } from "../components/styles/StyledComponents";

import { useNavigate } from 'react-router-dom';
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Done as DoneIcon,
  Edit as EditIcon,
  KeyboardBackspace as KeyboardBackspaceIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import AvatarCard from '../components/shared/AvatarCard';
import { samepleChats } from '../constants/sampleData';

const Groups = () => {
  const chatId = useSearchParams()[0].get("group");
  const [isEdit, setIsEdit] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [groupNameUpdatedValue, setGroupNameUpdatedValue] = useState("");

  const navigate=useNavigate();
  const navigateBack = () => {
    navigate("/");
  };
  const handleMobileClose = () => setIsMobileMenuOpen(false);

  const handleMobile = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };
const updateGroupName=()=>{
  setIsEdit(false);
  console.log("update group name");
}
  const IconBtns=(
    <>
    <Box sx={{
      display:{
        xs:"black",
        sm:"none",
        position:"fixed",
        right:"1rem",
        top:"1rem",
      },
    }}>
    <IconButton onClick={handelMobile}>
      <MenuIcon/>
    </IconButton>
    </Box>
      <Tooltip title="back">

<IconButton
sx={{
  position: "absolute",
            top: "2rem",
            left: "2rem",
            bgcolor: matBlack,
            color: "white",
            ":hover": {
              bgcolor: "rgba(0,0,0,0.7)",
            },
          }}
          onClick={navigateBack}
>
          <KeyboardBackspaceIcon />
</IconButton>
      </Tooltip>
    </>
  );

  const GroupName=(
    <Stack 
    direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      spacing={"1rem"}
      padding={"3rem"}

    >
      {isEdit?AddIcon(
        <>
<TextField
            value={groupNameUpdatedValue}
            onChange={(e) => setGroupNameUpdatedValue(e.target.value)}
          />
<IconButton onClick={updateGroupName} >
  <DoneIcon/>
</IconButton>
        </>
      ):(
        <>
          <Typography variant="h4" >{groupName}</Typography>
          <IconButton onClick={()=>setIsEdit(true)}>Edit</IconButton>
        </>
      )}
    </Stack>
  );
  return (
    <Grid container height={"100vh"}>
<Grid  
item
sx={{
  display:{
    xs:"none",
    sm:"block",

  },
}}
sm={4}
bgcolor={"bisque"}
>
Group List
</Grid>

<Grid
item
xs={12}
sm={8}
sx={{
  display:"flex",
  flexDirection:"column",
  alignItems:"center",
  position:"relative",
  padding:"1rem 3rem ",
}}
>
{IconBtns}
{groupName && GroupName}
</Grid>
<Drawer
sx={{
  display:{
    xs:"block",
    sm:"none",
  }
}}
open={isMobileMenuOpen}
onClose={handleMobileClose}
>
<GroupsList w={"50vw"} 
  myGroups={samepleChats}
  chatId={chatId}
/>
</Drawer>
    </Grid>
  );
};
const GroupsList=({w="100%",myGroups=[],chatId})=>{
  <Stack>
    {myGroups.length >0?(
myGroups.map((group)={})
    ):(
      <Typography textAlign={"center"} padding="1rem">No Groups</Typography>
    )}
  </Stack>
};
const GroupListItem = memo(({ group, chatId }) => {
  const { name, avatar, _id } = group;

  return (
    <Link
      to={`?group=${_id}`}
      onClick={(e) => {
        if (chatId === _id) e.preventDefault();
      }}
    >
      <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
        <AvatarCard avatar={avatar} />
        <Typography>{name}</Typography>
      </Stack>
    </Link>
  );
});
export default Groups;
