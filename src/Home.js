import React from "react";
import app from "./base";
import { Button } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
const Home = () => {

  return (

    <>
 <div >
      <AppBar position="static">
			<Toolbar>
			<IconButton edge="start"  color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
			<Typography variant="h6" >
            Home
          </Typography>
          <Button color="inherit"  onClick={() => app.auth().signOut()}>Login</Button>
			<IconButton edge="start"  color="inherit" aria-label="menu">
            <AccountCircleIcon />
          </IconButton>
			</Toolbar>	
      </AppBar>
    </div>
      <h1>Home</h1>
      <Button variant="contained" color="primary">
  			Primary
	    </Button>
      <button variant="contained" color="primary" onClick={() => app.auth().signOut()}>Sign out</button>
    </>
  );
};

export default Home;
