/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { useInputValidation } from "6pp";
import {
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  Box,
  Avatar
} from "@mui/material";
import React from "react";
import { Navigate } from "react-router-dom";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useTheme } from "@mui/material/styles";

const isAdmin =false;

const bgFade = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0.8;
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 40%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const bounceIn = keyframes`
  from, 20%, 40%, 60%, 80%, to {
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }
  0% {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }
  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }
  40% {
    transform: scale3d(.9, .9, .9);
  }
  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }
  80% {
    transform: scale3d(.97, .97, .97);
  }
  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledBox = styled(Box)`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.2) 100%);
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("https://source.unsplash.com/random/1600x900/?technology");
    background-size: cover;
    background-position: center;
    filter: blur(10px);
    z-index: -1;
    animation: ${bgFade} 10s infinite alternate;
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.2) 100%);
    z-index: -1;
  }
`;

const StyledPaper = styled(Paper)`
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(5px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  animation: ${fadeInUp} 1s ease-in-out;
`;

const StyledAvatar = styled(Avatar)`
  margin: 8px;
  animation: ${bounceIn} 1.2s ease;
`;

const StyledButton = styled(Button)`
  margin-top: 24px;
  margin-bottom: 16px;
  padding: 12px 0;
  font-weight: bold;
  animation: ${fadeIn} 2s ease;
`;

const AdminLogin = () => {
  const secretKey = useInputValidation("");
  const theme = useTheme();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit");
  };
  if (isAdmin) return <Navigate to="/admin/dashboard" />;

  return (
    <StyledBox>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <StyledPaper elevation={6}>
          <StyledAvatar sx={{ bgcolor: theme.palette.primary.main }}>
            <LockOutlinedIcon />
          </StyledAvatar>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
            Admin Login
          </Typography>
          <Box component="form" onSubmit={submitHandler} sx={{ mt: 1, width: '100%' }}>
            <TextField
              required
              fullWidth
              label="Secret Key"
              type="password"
              margin="normal"
              variant="outlined"
              value={secretKey.value}
              onChange={secretKey.changeHandler}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: theme.palette.primary.main,
                  },
                  '&:hover fieldset': {
                    borderColor: theme.palette.primary.dark,
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: theme.palette.primary.dark,
                  },
                },
              }}
            />
            <StyledButton
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Login
            </StyledButton>
          </Box>
        </StyledPaper>
      </Container>
    </StyledBox>
  );
};

export default AdminLogin;
